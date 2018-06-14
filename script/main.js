var menuBurger = document.querySelector('.menuBurger');
var row1 = document.querySelector('.row1');
var row0 = document.querySelector('.row0');
var list = document.querySelector('#mainav');
function addClassFunFive() {
    this.classList.toggle("clickMenuBurger");
    row1.classList.toggle("mobileMenu");
    row0.classList.toggle("displayNone");
    list.classList.toggle("scrollMenu");
}

menuBurger.addEventListener('click', addClassFunFive);