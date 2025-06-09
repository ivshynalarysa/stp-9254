document.addEventListener('DOMContentLoaded', () => {
  const faqTrack = document.querySelector('[data-faq-track]');
  const faqItems = faqTrack.querySelectorAll('[data-faq-item]');
  const prevBtns = document.querySelectorAll('[data-faq-nav-prev]');
  const nextBtns = document.querySelectorAll('[data-faq-nav-next]');
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
    } else {
      item.removeAttribute('data-open');
    }

    // 👇 Підсвічуємо тільки НЕвідкриту активну картку
    if (
      window.innerWidth >= 1200 &&
      index === currentIndex &&
      !item.hasAttribute('data-open')
    ) {
      item.classList.add('faq-focused');
    } else {
      item.classList.remove('faq-focused');
    }
  
  });
}


    // Скролимо відкритий елемент по центру
    const activeItem = faqItems[currentIndex];
    if (activeItem) {
      const containerWidth = faqTrack.clientWidth;
      const itemLeft = activeItem.offsetLeft;
      const itemWidth = activeItem.offsetWidth;
    if (window.innerWidth < 1200 ){
      //задержка, щоб не стрибав єкран
      setTimeout(()=>{
        activeItem.scrollIntoView({
           behavior: 'smooth',
           inline: 'center',
           block: 'nearest',
        });
      }, 1000);
      
    }
      else {
        faqTrack.scrollTo({
        left: itemLeft - (containerWidth / 2) + (itemWidth / 2),
        behavior: 'smooth',
      })
      }
      ;
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
    //e.preventDefault();
    const isOpen = item.hasAttribute('data-open');

    // Якщо ця ж картка вже відкрита — закриваємо її
    if (currentIndex === index && isOpen) {
      item.removeAttribute('data-open');
    } else {
      currentIndex = index;
      updateFAQ(false);
    }
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


