import {iosVhFix} from './utils/ios-vh-fix';
import {initAccordions} from './modules/accordion/init-accordion';
import {Burger} from './modules/burger/burger';
import {initAboutSwiper} from './modules/swiper/about-swiper';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
    const burger = new Burger();
    burger.init();
    initAccordions();
    initAboutSwiper();
  });
});

