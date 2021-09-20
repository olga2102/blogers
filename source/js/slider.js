new Swiper(".blogers__swiper", {
  navigation: {
    nextEl: '.swiper--next',
    prevEl: '.swiper--prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
    clickable: true,
  },
  breakpoints: {
    320: {
    slidesPerView: 1,
    slidesPerGroup: 1
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2
      },
    978: {
      slidesPerView: 4,
      slidesPerGroup: 4
      }
  },
  spaceBetween: 20,
  loop: true,
  // simulateTouch: false,
});
