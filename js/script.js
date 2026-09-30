/* Configurações de contato: altere aqui se o número ou a mensagem mudarem. */
(() => {
  'use strict';

  const contact = {
    phone: '5531999652698',
    message: 'Olá, Pata Certa! 🐾\n\nEncontrei vocês pelo site e gostaria de saber mais sobre:\n\nBanho e Tosa\nAtendimento Veterinário\nProdutos\nOutro assunto\n\nPodem me ajudar? 😊'
  };

  const whatsappURL = `https://wa.me/${contact.phone}?text=${encodeURIComponent(contact.message)}`;
  document.querySelectorAll('[data-whatsapp]').forEach(link => {
    link.href = whatsappURL;
  });
  document.getElementById('current-year').textContent = new Date().getFullYear();

  const header = document.getElementById('site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('main-nav');
  const mobileQuery = window.matchMedia('(max-width: 1000px)');
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const navLinks = Array.from(nav.querySelectorAll('a[href^="#"]'));

  function setMenu(open, restoreFocus = false) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    nav.classList.toggle('is-open', open);
    if (restoreFocus) toggle.focus();
  }

  toggle.addEventListener('click', () => {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    const target = link.hash && link.origin === window.location.origin
      ? document.getElementById(link.hash.slice(1)) : null;
    const wasMobileOpen = mobileQuery.matches && toggle.getAttribute('aria-expanded') === 'true';
    setMenu(false);
    if (target && wasMobileOpen) {
      // Move o foco para o destino sem duplicar o scroll nativo da âncora.
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
    } else if (wasMobileOpen) {
      toggle.focus();
    }
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenu(false, true);
    }
  });
  document.addEventListener('click', event => {
    if (!header.contains(event.target)) setMenu(false);
  });
  document.addEventListener('focusin', event => {
    if (!header.contains(event.target)) setMenu(false);
  });
  mobileQuery.addEventListener('change', () => setMenu(false));
  document.documentElement.classList.add('has-js');

  // Um único trabalho por frame para o header e o link da seção atual.
  const sections = navLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  let framePending = false;
  function updateNavigation() {
    header.classList.toggle('is-scrolled', window.scrollY > 12);
    const offset = header.getBoundingClientRect().height + 130;
    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= offset) current = section;
    }
    navLinks.forEach(link => {
      if (current && link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    framePending = false;
  }
  function queueNavigationUpdate() {
    if (!framePending) {
      framePending = true;
      window.requestAnimationFrame(updateNavigation);
    }
  }
  window.addEventListener('scroll', queueNavigationUpdate, { passive: true });
  window.addEventListener('resize', queueNavigationUpdate, { passive: true });
  updateNavigation();

  // Sem JS, sem IntersectionObserver ou com movimento reduzido, tudo permanece visível.
  let revealObserver;
  function revealAll() {
    if (revealObserver) revealObserver.disconnect();
    document.querySelectorAll('.reveal.is-pending').forEach(element => element.classList.remove('is-pending'));
  }
  if ('IntersectionObserver' in window && !motionQuery.matches) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('is-pending');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px 0px 0px' });
    document.querySelectorAll('.reveal').forEach(element => {
      if (element.getBoundingClientRect().top > window.innerHeight) {
        element.classList.add('is-pending');
        revealObserver.observe(element);
      }
    });
  }
  motionQuery.addEventListener('change', event => {
    if (event.matches) revealAll();
  });
  document.addEventListener('focusin', event => {
    const region = event.target.closest('.reveal.is-pending');
    if (region) {
      region.classList.remove('is-pending');
      if (revealObserver) revealObserver.unobserve(region);
    }
  });
  window.addEventListener('beforeprint', revealAll);
})();
