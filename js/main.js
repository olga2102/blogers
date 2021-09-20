const menu = document.querySelector(".main-nav");
const menuButton = document.querySelector(".toggle");
const body = document.querySelector(".page__body");
const links = document.querySelectorAll(".main-nav__link");
const header = document.querySelector(".header__wrapper");

const closedMenu = () => {
  menuButton.classList.add("toggle--close");
  menu.classList.remove("main-nav--opened");
}

closedMenu();

menuButton.addEventListener("click", () => {
  if (menuButton.classList.contains('toggle--close')) {
    menu.classList.toggle("main-nav--opened");
  }
});

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
