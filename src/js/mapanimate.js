
  function handleCandyMapScroll() {
    const elements = document.querySelectorAll('.animate-left, .animate-right');

    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight - 100) {
        el.classList.add('show');
      }
    });
  }

  window.addEventListener('scroll', handleCandyMapScroll);
  window.addEventListener('load', handleCandyMapScroll);
  
    document.addEventListener('DOMContentLoaded', handleCandyMapScroll);
