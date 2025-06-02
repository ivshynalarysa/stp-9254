document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.swiper-wrapper');
    const slides = document.querySelectorAll('.swiper-slide');
    const prevBtn = document.querySelector('.swiper-button-prev');
    const nextBtn = document.querySelector('.swiper-button-next');

    let currentIndex = 0;

    function updateSlider() {
      wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    });

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider();
    });

    updateSlider();
  });