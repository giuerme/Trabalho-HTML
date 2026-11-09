// Login e cadastro na mesma página. Demonstração local: dados ficam só neste navegador (sem servidor).
(() => {
  const M = window.MSF, $ = id => document.getElementById(id);
  const MODOS = {
    entrar: { t: 'Entrar', h: 'Que bom ter você de volta', p: 'Entre para continuar ajudando.' },
    cadastro: { t: 'Criar conta', h: 'Faça parte do movimento', p: 'Crie sua conta para doar, ser voluntário ou cadastrar sua instituição.' }
  };

  async function hash(txt) {
    if (window.crypto && crypto.subtle) {
      const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(txt));
      return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, '0')).join('');
    }
    let h = 5381; for (const c of txt) h = (h * 33) ^ c.charCodeAt(0);
    return 'x' + (h >>> 0).toString(16);
  }

  function mostrar(m, foco) {
    if (!MODOS[m]) m = 'entrar';
    Object.keys(MODOS).forEach(x => {
      $('painel-' + x).hidden = x !== m;
      const t = $('tab-' + x);
      t.setAttribute('aria-selected', x === m);
      t.tabIndex = x === m ? 0 : -1;
    });
    $('aside-titulo').textContent = MODOS[m].h;
    $('aside-texto').textContent = MODOS[m].p;
    document.title = MODOS[m].t + ' | Movimento Sem Fome';
    if (location.hash !== '#' + m) history.replaceState(null, '', '#' + m);
    if (foco) $('painel-' + m).querySelector('input').focus();
  }

  const sessao = M.sessao();
  if (sessao) {
    $('abas').hidden = true;
    ['entrar', 'cadastro'].forEach(x => { $('painel-' + x).hidden = true; });
    $('sessao').hidden = false;
    $('sessao-nome').textContent = sessao.nome;
    return;
  }

  document.querySelectorAll('[data-modo]').forEach(b => b.addEventListener('click', () => mostrar(b.dataset.modo, true)));
  $('abas').addEventListener('keydown', e => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    mostrar($('tab-entrar').getAttribute('aria-selected') === 'true' ? 'cadastro' : 'entrar', false);
    document.querySelector('[role=tab][aria-selected=true]').focus();
  });
  window.addEventListener('hashchange', () => mostrar(location.hash.slice(1), false));
  mostrar(location.hash.slice(1), false);

  const msg = (f, t, tipo) => { const e = $('msg-' + f); e.textContent = t; e.className = 'msg ' + tipo; e.hidden = false; };
  const emailOk = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  const concluir = (f, u, texto) => {
    M.entrar({ nome: u.nome, email: u.email });
    msg(f, texto, 'sucesso');
    setTimeout(() => { location.href = 'index.html'; }, 1000);
  };

  $('form-cadastro').addEventListener('submit', async e => {
    e.preventDefault();
    const f = e.target, nome = f.nome.value.trim(), email = f.email.value.trim().toLowerCase(), senha = f.senha.value;
    const erro = !nome ? ['nome', 'Informe seu nome.']
      : !emailOk(email) ? ['email', 'Informe um e-mail válido.']
      : senha.length < 8 ? ['senha', 'A senha precisa ter pelo menos 8 caracteres.']
      : senha !== f.confirma.value ? ['confirma', 'As senhas não são iguais.'] : null;
    if (erro) { msg('cadastro', erro[1], 'erro'); f[erro[0]].focus(); return; }
    const us = M.ler('msf_usuarios', []);
    if (us.some(u => u.email === email)) { msg('cadastro', 'Este e-mail já tem cadastro. Use a aba Entrar.', 'erro'); return; }
    us.push({ nome, email, h: await hash(email + senha) });
    M.gravar('msf_usuarios', us);
    concluir('cadastro', { nome, email }, 'Conta criada. Levando você para o início…');
  });

  $('form-entrar').addEventListener('submit', async e => {
    e.preventDefault();
    const f = e.target, email = f.email.value.trim().toLowerCase(), senha = f.senha.value;
    if (!emailOk(email)) { msg('entrar', 'Informe um e-mail válido.', 'erro'); f.email.focus(); return; }
    if (!senha) { msg('entrar', 'Informe sua senha.', 'erro'); f.senha.focus(); return; }
    const u = M.ler('msf_usuarios', []).find(x => x.email === email);
    if (!u || u.h !== await hash(email + senha)) {
      msg('entrar', 'E-mail ou senha incorretos. Se ainda não tem conta, use a aba Cadastre-se.', 'erro'); return;
    }
    concluir('entrar', u, 'Tudo certo. Levando você para o início…');
  });
})();
