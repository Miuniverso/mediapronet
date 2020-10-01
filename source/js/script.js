"use strict";

// open burger menu

var navButton = document.querySelector(".main-nav__btn");
var menu = document.querySelector(".main-nav__list");
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

if (viewportWidth < 767) {
  menu.classList.add("visually-hidden");
  navButton.classList.remove("visually-hidden");
} else {
  menu.classList.remove("visually-hidden");
  navButton.classList.add("visually-hidden");
}

window.addEventListener("resize", function() {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  if (viewportWidth > 767) {
    menu.classList.remove("visually-hidden");
    navButton.classList.add("visually-hidden");
  } else {
    menu.classList.add("visually-hidden");
    navButton.classList.remove("visually-hidden");
  }
}, false);

navButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.toggle("visually-hidden");
  navButton.classList.toggle("main-nav__btn--active");
});


// open map nav

var mapBtn = document.querySelector(".location__btn");

mapBtn.addEventListener("click", function() {
  mapBtn.classList.toggle("location__btn--active");
  document.querySelector(".location__map__list").classList.toggle("location__map__list--open");
})
