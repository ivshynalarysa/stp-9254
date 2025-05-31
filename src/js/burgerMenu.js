// const openBtnEl = document.querySelector('[data-action="open"]');
// const closeBtnEl = document.querySelector('[data-action="close"]');
// const burgerMenuEl = document.querySelector('[data-visible]');

// openBtnEl.addEventListener('click', e => {
//   burgerMenuEl.dataset.visible = 'open';
// });

// closeBtnEl.addEventListener('click', e => {
//   burgerMenuEl.dataset.visible = 'close';
// });

const openBtn = document.querySelector('[data-action="open"]');
const closeBtn = document.querySelector('[data-action="close"]');
const modalMenu = document.querySelector('[data-visible]');

openBtn.addEventListener('click', () => {
  modalMenu.dataset.visible = 'true';
});

closeBtn.addEventListener('click', () => {
  modalMenu.dataset.visible = 'false';
});

