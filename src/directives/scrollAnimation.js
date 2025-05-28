export const scrollAnimation = {
  mounted(el) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('fade-up');
          observer.unobserve(el); // Stop observing once animation is triggered
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of the element is visible
      rootMargin: '0px 0px -50px 0px' // Start animation slightly before element comes into view
    });

    observer.observe(el);
  }
}; 