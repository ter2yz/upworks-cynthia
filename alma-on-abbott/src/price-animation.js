/**
 * Price Animation - Scroll-triggered reveal animation for pricing
 * Triggers when pricing elements come into view
 */
(() => {
  const els = document.querySelectorAll('.price-line');

  // Fallback for browsers without IntersectionObserver
  if (!('IntersectionObserver' in window) || !els.length) {
    els.forEach(el => el.classList.add('is-visible'));
    return;
  }

  // Set up IntersectionObserver to trigger animation when visible
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target); // play once
      }
    });
  }, { threshold: 0.35 }); // Trigger when 35% visible

  els.forEach(el => io.observe(el));
})();
