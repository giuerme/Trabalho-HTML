// Layout dinâmico (cabeçalho, menu, rodapé), acessibilidade global e sessão do usuário.
(() => {
  const ler = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v ?? d; } catch { return d; } };
  const gravar = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };
  const sessao = () => ler('msf_sessao', null);
  window.MSF = {
    ler, gravar, sessao,
    entrar: u => gravar('msf_sessao', u),
    sair: () => { try { localStorage.removeItem('msf_sessao'); } catch {} location.reload(); }
  };

  const LINKS = [['index.html', 'Início'], ['sobre.html', 'Sobre'], ['impacto.html', 'Impacto'],
    ['projetos.html', 'Projetos'], ['noticias.html', 'Notícias'], ['contato.html', 'Contato']];
  const MAIS = [['galeria.html', 'Galeria'], ['midia.html', 'Mídia'], ['acessibilidade.html', 'Acessibilidade'],
    ['orcamento_hospedagem.html', 'Orçamento e hospedagem']];

  let pag = location.pathname.split('/').pop() || 'index.html';
  if (!pag.includes('.')) pag += '.html';

  const links = (lista, cls) => lista.map(([h, t]) =>
    `<a class="${cls}${h === pag ? ' ativo' : ''}" href="${h}"${h === pag ? ' aria-current="page"' : ''}>${t}</a>`).join('');
  const logo = '<div class="logo"><img src="./src/images/icons/maca.svg" alt=""> Movimento Sem Fome</div>';
  const opcoes = () => sessao()
    ? '<span class="usuario">Olá, <strong data-nome></strong></span><span><button type="button" data-sair>Sair</button></span>'
    : '<span><a href="login.html#entrar">Entrar</a></span><span><a href="login.html#cadastro">Cadastre-se</a></span>';

  const topo = document.getElementById('navbar-container');
  if (topo) topo.innerHTML = `<nav class="navbar" aria-label="Principal">${logo}<div class="caminhos">${links(LINKS, 'caminhos-link')}</div><div class="opcoes">${opcoes()}</div></nav>`;

  const mais = document.querySelector('nav.mais');
  if (mais) mais.innerHTML = links(MAIS, '');

  const rodape = document.getElementById('footer-container');
  if (rodape) rodape.innerHTML = `<div class="footer-nav">${logo}
    <div class="footer-links"><a href="#">Termos de Uso</a><a href="#">Política de Privacidade</a><a href="contato.html">Contato</a></div>
    <div class="footer-social">
      <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>
      <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook" aria-hidden="true"></i></a>
      <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin" aria-hidden="true"></i></a>
    </div></div>`;

  const s = sessao();
  document.querySelectorAll('[data-nome]').forEach(e => { e.textContent = s ? String(s.nome).split(' ')[0] : ''; });

  // Menu mobile: o botão só existe com JavaScript.
  const nav = document.querySelector('.navbar');
  if (nav) {
    document.documentElement.classList.add('js');
    const t = document.createElement('button');
    t.type = 'button'; t.className = 'nav-toggle';
    t.setAttribute('aria-expanded', 'false'); t.setAttribute('aria-label', 'Abrir menu');
    t.innerHTML = '<span></span><span></span><span></span>';
    nav.querySelector('.logo').after(t);
    t.addEventListener('click', () => {
      const aberto = nav.classList.toggle('aberto');
      t.setAttribute('aria-expanded', aberto);
      t.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    });
  }

  // Painel de acessibilidade presente em todas as páginas.
  const w = document.createElement('div');
  w.className = 'a11y';
  w.innerHTML = `<button type="button" class="a11y-btn" aria-expanded="false" aria-controls="a11y-painel" aria-label="Opções de acessibilidade"><i class="fa-solid fa-universal-access" aria-hidden="true"></i></button>
    <div class="a11y-painel" id="a11y-painel" role="group" aria-label="Opções de acessibilidade" hidden>
      <h2>Acessibilidade</h2>
      <div class="a11y-linha"><button type="button" data-a="menos">A- Menor</button><button type="button" data-a="mais">A+ Maior</button></div>
      <button type="button" data-a="contraste" aria-pressed="false">Alto contraste</button>
      <button type="button" data-a="links" aria-pressed="false">Sublinhar links</button>
      <button type="button" data-a="pausa" aria-pressed="false">Pausar animações</button>
      <button type="button" data-a="reset">Restaurar padrão</button>
    </div>`;
  document.body.append(w);
  const abrir = w.querySelector('.a11y-btn'), painel = w.querySelector('.a11y-painel');
  const alternar = (v) => { painel.hidden = !v; abrir.setAttribute('aria-expanded', v); };
  abrir.addEventListener('click', () => alternar(painel.hidden));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !painel.hidden) { alternar(false); abrir.focus(); } });
  document.addEventListener('click', e => { if (!w.contains(e.target)) alternar(false); });

  // Preferências salvas e aplicadas em todo o site. Botões [data-a] funcionam em qualquer lugar.
  const A = Object.assign({ fs: 0, contraste: false, links: false, pausa: false }, ler('msf_a11y', {}));
  const aplicar = () => {
    const c = document.body.classList;
    c.remove('fs1', 'fs2'); if (A.fs) c.add('fs' + A.fs);
    c.toggle('contraste', A.contraste); c.toggle('links-sub', A.links); c.toggle('sem-mov', A.pausa);
    document.querySelectorAll('[data-a]').forEach(b => {
      if (b.dataset.a in A && b.dataset.a !== 'fs') b.setAttribute('aria-pressed', A[b.dataset.a]);
    });
    gravar('msf_a11y', A);
  };
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-a]');
    if (b) {
      const a = b.dataset.a;
      if (a === 'mais') A.fs = Math.min(2, A.fs + 1);
      else if (a === 'menos') A.fs = Math.max(0, A.fs - 1);
      else if (a === 'reset') Object.assign(A, { fs: 0, contraste: false, links: false, pausa: false });
      else if (a in A) A[a] = !A[a];
      aplicar();
    }
    if (e.target.closest('[data-sair]')) window.MSF.sair();
  });
  aplicar();
})();
