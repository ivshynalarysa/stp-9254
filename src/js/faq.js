document.addEventListener('DOMContentLoaded', () => {
  const faqTrack = document.querySelector('.faq-track');
  const faqItems = faqTrack.querySelectorAll('.faq-item');
  const prevBtns = document.querySelectorAll('[data-menu-nav-prev]');
  const nextBtns = document.querySelectorAll('[data-menu-nav-next]');
  let currentIndex = 0;

  function updateFAQ(toggle = false, toggleIndex = null) {
    faqItems.forEach((item, index) => {
      item.classList.remove('faq-focused');

      if (toggle && index === toggleIndex) {
        // Переключити відкриття конкретного елемента
        if (item.hasAttribute('data-open')) {
          item.removeAttribute('data-open');
        } else {
          // Закриваємо інших, відкриваємо цей
          faqItems.forEach(i => i.removeAttribute('data-open'));
          item.setAttribute('data-open', 'true');
          currentIndex = index;
        }
      }
    });

    // Якщо toggle не передано або після toggle потрібно підсвітити і скролити поточний
    if (!toggle) {
      faqItems.forEach((item, index) => {
        if (index === currentIndex) {
          item.setAttribute('data-open', 'true');
          item.classList.add('faq-focused');
        } else {
          item.removeAttribute('data-open');
        }
      });
    }

    // Скролимо відкритий елемент по центру
    const activeItem = faqItems[currentIndex];
    if (activeItem) {
      const containerWidth = faqTrack.clientWidth;
      const itemLeft = activeItem.offsetLeft;
      const itemWidth = activeItem.offsetWidth;

      faqTrack.scrollTo({
        left: itemLeft - (containerWidth / 2) + (itemWidth / 2),
        behavior: 'smooth',
      });
    }
  }

  // Ініціалізація - знайти елемент з data-open="true"
  const initiallyOpen = [...faqItems].findIndex(i => i.hasAttribute('data-open'));
  if (initiallyOpen >= 0) currentIndex = initiallyOpen;
  updateFAQ();

  // Обробник кнопок toggle
  faqItems.forEach((item, index) => {
    const toggleBtn = item.querySelector('[data-menu-handler]');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Щоб не спрацьовував клік по item
        updateFAQ(true, index);
      });
    }
  });

  // Обробник кліку по самому item (відкриваємо цей)
  faqItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      currentIndex = index;
      updateFAQ(false);
    });
  });

  // Кнопки навігації
  prevBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      currentIndex = (currentIndex - 1 + faqItems.length) % faqItems.length;
      updateFAQ(false);
    });
  });

  nextBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      currentIndex = (currentIndex + 1) % faqItems.length;
      updateFAQ(false);
    });
  });
});


