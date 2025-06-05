document.addEventListener('DOMContentLoaded', () => {
  const scrollContainer = document.querySelector('.faq-track');
  const faqItems = scrollContainer.querySelectorAll('.faq-item');
  const prevBtns = document.querySelectorAll('[data-menu-nav-prev]');
  const nextBtns = document.querySelectorAll('[data-menu-nav-next]');
  let currentIndex = 0;

  function updateFAQ(openCard = true) {
    faqItems.forEach((item, index) => {
      item.classList.remove('faq-focused');
      if (index === currentIndex) {
        item.classList.add('faq-focused');
        if (openCard) {
          item.setAttribute('data-open', 'true');
        }
      } else {
        if (openCard) {
          item.removeAttribute('data-open');
        }
      }
    });

    const targetItem = faqItems[currentIndex];
    const offsetLeft = targetItem.offsetLeft;
    const containerWidth = scrollContainer.clientWidth;
    const targetWidth = targetItem.clientWidth;

    scrollContainer.scrollTo({
      left: offsetLeft - (containerWidth - targetWidth) / 2,
      behavior: 'smooth',
    });
  }

  // Клік по картці
  faqItems.forEach((item, index) => {
    const icon = item.querySelector('.faq-toggle-icon');

    if (icon) {
      icon.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = index;
        updateFAQ(true);
      });
    }

    item.addEventListener('click', () => {
      currentIndex = index;
      updateFAQ(true);
    });
  });

  // Зелені стрілки — всі кнопки prev/next
  prevBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      currentIndex = (currentIndex - 1 + faqItems.length) % faqItems.length;
      updateFAQ(false);
    });
  });

  nextBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      currentIndex = (currentIndex + 1) % faqItems.length;
      updateFAQ(false);
    });
  });

  // Початковий активний
  const initiallyOpen = document.querySelector('.faq-item[data-open="true"]');
  if (initiallyOpen) {
    const index = parseInt(initiallyOpen.dataset.index);
    if (!isNaN(index)) currentIndex = index;
  }

  updateFAQ(true);
});
