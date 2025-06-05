document.addEventListener('DOMContentLoaded', () => {
  const banner = document.querySelector('[data-cookie-window]');
  const buttons = document.querySelectorAll('[data-cookie-action]');

  // Перевірка на згоду
  const consent = localStorage.getItem('cookiesConsent');

  if (!consent) {
    banner.setAttribute('data-visible', 'true');
    banner.style.display = 'block';

    // Блокуємо скрол
    document.body.style.overflow = 'hidden';
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const action = button.dataset.cookieAction;

      // Зберігаємо вибір
      if (action === 'accept') {
        localStorage.setItem('cookiesConsent', 'accepted');
      } else if (action === 'decline') {
        localStorage.setItem('cookiesConsent', 'declined');
      }

      // Приховуємо банер і дозволяємо скрол
      banner.style.display = 'none';
      document.body.style.overflow = ''; // повертаємо стандартний скрол
    });
  });
});



