const banner = document.querySelector('[data-cookie-window]');
const buttons = document.querySelectorAll('[data-cookie-action]');

if (!localStorage.getItem('cookiesConsent')) {
  banner.setAttribute('data-visible', 'true');
  banner.style.display = 'block';
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const action = button.dataset.cookieAction;

    if (action === 'accept') {
      localStorage.setItem('cookiesConsent', 'accepted');
    } else if (action === 'decline') {
      localStorage.setItem('cookiesConsent', 'declined');
    }

    banner.style.display = 'none';
  });
});


