

document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.querySelector('[data-action="open"]');
  const closeBtn = document.querySelector('[data-action="close"]');
  const modalMenu = document.querySelector('.backdrop');
  const navLinks = document.querySelectorAll('.modal-nav .nav-item a');

  console.log('burgerMenu.js loaded');
  console.log('openBtn:', openBtn);
  console.log('closeBtn:', closeBtn);
  console.log('modalMenu:', modalMenu);

  if (openBtn && closeBtn && modalMenu) {
    openBtn.addEventListener('click', () => {
      modalMenu.dataset.visible = 'true';
    });

    closeBtn.addEventListener('click', () => {
      modalMenu.dataset.visible = 'false';
    });
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        modalMenu.dataset.visible = 'false';
      });
    }); 
    
  }
}); 
