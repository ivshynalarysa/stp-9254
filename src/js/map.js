import Swiper from 'swiper';
import { Navigation, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

// Ініціалізація Swiper для мобільної карти
const swiper = new Swiper('.swiper-mob', {
  modules: [Navigation, EffectCoverflow],

  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
    grabCursor: true,
    centeredSlides: true,
    loop: true, //

  navigation: {
    nextEl: '.map-btn-nav-next',
    prevEl: '.map-btn-nav-prev',
  },

  on: {
    init: () => {
      fixSwiperGap();
    },
    resize: () => {
      fixSwiperGap();
    },
  },
});

// Фікс візуального gap між слайдами через padding
function fixSwiperGap() {
  const slides = document.querySelectorAll('.swiper-mob .swiper-slide');
  slides.forEach((slide, index) => {
    slide.style.marginRight = index !== slides.length - 1 ? '8px' : '0';
  });
}