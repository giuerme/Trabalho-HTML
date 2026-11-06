// Controles de acessibilidade: data-a="mais" | "menos" | "contraste"
let n = 0;
document.querySelectorAll('[data-a]').forEach(b => b.addEventListener('click', () => {
  const a = b.dataset.a, c = document.body.classList;
  if (a === 'contraste') return c.toggle('contraste');
  n = Math.max(0, Math.min(2, n + (a === 'mais' ? 1 : -1)));
  c.remove('fs1', 'fs2'); if (n) c.add('fs' + n);
}));
