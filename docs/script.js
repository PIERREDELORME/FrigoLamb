// Mobile hamburger menu
(function () {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  if (!hamburger || !nav) return;

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });

  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('open');
      hamburger.classList.remove('open');
    }
  });
})();

// Contact form
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const btn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const original = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-check"></i> Message envoyé !';
    btn.style.background = '#22c55e';
    btn.style.borderColor = '#22c55e';
    btn.disabled = true;

    setTimeout(() => {
      btn.innerHTML = original;
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.disabled = false;
      form.reset();
    }, 4000);
  });
})();
