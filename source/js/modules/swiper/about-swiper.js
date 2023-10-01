const aboutSlider = document.querySelector('.about__slider');

const initAboutSwiper = () => {
  if (!aboutSlider) {
    return;
  }

  // eslint-disable-next-line
  new Swiper('#aboutSwiper', {
    initialSlide: 0,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      320: {
        slidesPerGroup: 1,
        initialSlide: 0,
        slidesPerView: 1,
        // autoHeight: true,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        initialSlide: 0,
      },
    },
  });
};

export {initAboutSwiper};
