document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');
  const prevBtn = document.querySelector('[data-menu-nav-prev]');
  const nextBtn = document.querySelector('[data-menu-nav-next]');
  let currentIndex = 0;

  function updateFAQ() {
    faqItems.forEach((item, index) => {
      if (index === currentIndex) {
        item.setAttribute('data-open', 'true');
      } else {
        item.removeAttribute('data-open');
      }
    });
  }

  // Клік по всьому item або іконці
  faqItems.forEach((item, index) => {
    const icon = item.querySelector('.faq-toggle-icon');

    // Клік по іконці
    if (icon) {
      icon.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = index;
        updateFAQ();
      });
    }

    // Клік по всьому елементу
    item.addEventListener('click', () => {
      currentIndex = index;
      updateFAQ();
    });
  });

  // Стрілки навігації
  prevBtn?.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + faqItems.length) % faqItems.length;
    updateFAQ();
  });

  nextBtn?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % faqItems.length;
    updateFAQ();
  });

  // Початковий стан
  const initiallyOpen = document.querySelector('.faq-item[data-open="true"]');
  if (initiallyOpen) {
    currentIndex = parseInt(initiallyOpen.dataset.index);
  }
  updateFAQ();
});
