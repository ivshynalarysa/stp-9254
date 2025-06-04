import Swiper from 'swiper';
import { Navigation, EffectCards, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-coverflow';

let swiperInstance;

function initSwiper() {
  if (swiperInstance) swiperInstance.destroy(true, true);

  const isMobile = window.matchMedia('(max-width: 1199px)').matches;
  const slides = document.querySelectorAll('#reviews-swiper .swiper-slide');
  const enableLoop = slides.length >= 4;

  const options = {
    modules: [Navigation, EffectCards, EffectCoverflow],
    grabCursor: true,
    loop: isMobile ? enableLoop : false,
    centeredSlides: isMobile ? true : false,
    slidesPerView: isMobile ? 1 : 3,
    
    effect: isMobile ? 'cards' : 'coverflow',
    ...(isMobile
      ? {
          cardsEffect: {
            perSlideOffset: 8,
            perSlideRotate: 3,
            slideShadows: false,
            
          },
        }
      : {
          navigation: {
            nextEl: '#reviews-swiper-next',
            prevEl: '#reviews-swiper-prev',
          },
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: true,
           
            
          },
        }),
  };

  swiperInstance = new Swiper('#reviews-swiper', options);
}

document.addEventListener('DOMContentLoaded', () => {
  initSwiper();
  window.addEventListener('resize', () => initSwiper());
});
