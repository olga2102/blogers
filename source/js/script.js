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

//переключение меню
menuButton.addEventListener("click", () => {
  if (menuButton.classList.contains('toggle--close')) { // меню закрыто
    menu.classList.toggle("main-nav--opened");
  }
});
