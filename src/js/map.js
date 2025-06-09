
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

  spaceBetween: 8, 

  navigation: {
    nextEl: '.map-btn-nav-next',
    prevEl: '.map-btn-nav-prev',
  },
});
