var menuBurger = document.querySelector('.menuBurger');
var row1 = document.querySelector('.row1');
var row0 = document.querySelector('.row0');
var list = document.querySelector('#mainav');
function addClassMenuBurger() {
    this.classList.toggle("clickMenuBurger");
    row1.classList.toggle("mobileMenu");
    row0.classList.toggle("displayNone");
    list.classList.toggle("scrollMenu");
}

menuBurger.addEventListener('click', addClassMenuBurger);

var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
if(hasClass(menuBurger, "clickMenuBurger")){
    //
}
else {
    window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
        var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        if (st > lastScrollTop){
            menuBurger.style.position="relative";
        } else {
            menuBurger.style.position="fixed";
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);
}

var btnScroll = document.querySelector("#backtotop");

btnScroll.addEventListener('click', function () {
    document.querySelector('#topbar').scrollIntoView({
        behavior: "smooth"
    });
});

function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}