/**
 * Scroll-triggered animations
 * Adds smooth fade-in effects when elements come into view
 */
(() => {
  // Select all elements that should animate on scroll
  const animateElements = document.querySelectorAll('.animate-on-scroll');

  // Fallback for browsers without IntersectionObserver
  if (!('IntersectionObserver' in window) || !animateElements.length) {
    animateElements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  // Set up IntersectionObserver for scroll animations
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Keep observing in case user wants to see animation again on scroll up
      }
    });
  }, {
    threshold: 0.1, // Trigger when 10% visible
    rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport
  });

  // Observe all elements
  animateElements.forEach(el => scrollObserver.observe(el));

  // Add smooth hover effect to images with specific class
  document.querySelectorAll('img[alt*="Logo"], img[alt*="logo"]').forEach(img => {
    img.classList.add('logo-hover');
  });

  // // Add subtle entrance animation to footer when it comes into view
  // const footer = document.querySelector('footer');
  // if (footer) {
  //   const footerObserver = new IntersectionObserver((entries) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         const footerElements = footer.querySelectorAll('img, h3, p');
  //         footerElements.forEach((el, index) => {
  //           setTimeout(() => {
  //             el.style.opacity = '0';
  //             el.style.transform = 'translateY(20px)';
  //             el.style.animation = `fadeInUp 0.6s ease forwards`;
  //           }, index * 100);
  //         });
  //         footerObserver.unobserve(footer);
  //       }
  //     });
  //   }, { threshold: 0.2 });

  //   footerObserver.observe(footer);
  // }
})();
