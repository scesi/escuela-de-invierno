document.addEventListener('astro:page-load', initBurgerMenu);
document.addEventListener('astro:after-swap', initBurgerMenu);

function initBurgerMenu() {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('navLinks');
  const lines = document.querySelectorAll('.line');
  if (!burger || !nav) return;

  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('show');
    document.querySelector('.header-container')?.classList.toggle('show');
    document.querySelector('.logo')?.classList.toggle('show');
    lines.forEach(line => line.classList.toggle('show'));
  });
  document.addEventListener('astro:page-load', initBurgerMenu);
document.addEventListener('astro:after-swap', initBurgerMenu);
}
