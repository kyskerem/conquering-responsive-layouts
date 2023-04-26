const navButton = document.querySelector(".nav--toggle-button");
const menu = document.querySelector(".nav__list");
navButton.addEventListener("click", () => {
  menu.classList.toggle("menu-toggle");
});
