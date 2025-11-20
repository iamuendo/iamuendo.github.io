const nav = document.getElementById('side-nav');
const toggleBtn = document.getElementById('menu-toggle');

toggleBtn.addEventListener('click', () => {
  const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
  toggleBtn.setAttribute('aria-expanded', !expanded);
  nav.classList.toggle('show');
});
