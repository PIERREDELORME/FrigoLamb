/* ========================================
   GLACE FRIGO-LAMB — Global Script
   ======================================== */

// ---- Mobile nav toggle ----
const burger = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-nav');

if (burger && mobileNav) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    mobileNav.classList.toggle('open');
  });

  // Close on link click
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      mobileNav.classList.remove('open');
    });
  });
}

// ---- Active nav link ----
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navbar-nav a, .mobile-nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ---- Reveal on scroll ----
const reveals = document.querySelectorAll('.reveal');
if (reveals.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, entry.target.dataset.delay || 0);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach((el, i) => {
    if (!el.dataset.delay) el.dataset.delay = i * 60;
    observer.observe(el);
  });
}

// ---- Scroll to top ----
const scrollTopBtn = document.querySelector('.scroll-top');
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ---- Contact form ----
const form = document.getElementById('demandeForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formWrap = form.closest('.contact-form-wrap');
    const successMsg = formWrap.querySelector('.form-success');
    form.style.display = 'none';
    if (successMsg) successMsg.classList.add('visible');
  });
}
