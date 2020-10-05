// accordion

var footerItems = document.querySelectorAll(".dropdown");

for (var i = 0; i < footerItems.length; i++) {
  footerItems[i].addEventListener("click", accordion);
}

function accordion(event) {
  var elem = event.currentTarget;

  if(elem.querySelector(".dropdown__btn").classList.contains("btn-open")) {
    footerItems.forEach(function(item) {
      item.querySelector(".dropdown__btn").classList.remove("btn-open");
      item.querySelector(".dropdown__list").classList.add("dropdown__list--hidden");
    });
  } else {
    footerItems.forEach(function(item) {
      item.querySelector(".dropdown__btn").classList.remove("btn-open");
      item.querySelector(".dropdown__list").classList.add("dropdown__list--hidden");
    });

    elem.querySelector(".dropdown__btn").classList.toggle("btn-open");
    elem.querySelector(".dropdown__list").classList.toggle("dropdown__list--hidden");
  }
}

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

// disabled / submit form

var form = document.querySelector("form");
var inputs = form.querySelectorAll("input:not([type=checkbox])");
var selects = form.querySelectorAll("select");
var formBtn = form.querySelector(".form__btn");
var title = document.querySelector(".feedback__title");
var succes = document.querySelector(".feedback__succes");

var undisabled = function() {

  inputs.forEach(function(item) {
    item.disabled = false;
  })

  selects.forEach(function(item) {
    item.disabled = false;
  })

  formBtn.disabled = false;
};

form.addEventListener("click", undisabled);


form.addEventListener("submit", function(e) {
  e.preventDefault();
  title.classList.add("visually-hidden");
  form.classList.add("visually-hidden");
  succes.classList.add("feedback__succes--open");
  document.querySelector(".feedback__date").innerHTML = form.querySelector("select[id=dates]").value;
  document.querySelector(".feedback__time").innerHTML = form.querySelector("select[id=time]").value;
})

// open map nav

var mapBtn = document.querySelector(".location__btn");

mapBtn.addEventListener("click", function() {
  mapBtn.classList.toggle("location__btn--active");
  document.querySelector(".location__map__list").classList.toggle("location__map__list--open");
})

ymaps.ready(function() {
  var myMap = new ymaps.Map('map', {
      center: [55.754000, 37.524103],
      zoom: 16
    })
});

window.onload = function () {
    document.body.classList.add("loaded_hiding");
    window.setTimeout(function () {
      document.body.classList.add("loaded");
      // document.body.classList.remove("loaded_hiding");
      document.body.classList.remove("no-scroll");
    }, 4001);
  }

// slider

var mySwiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 2000,
  },
  loop: true,

  pagination: {
    el: '.intro__btns',
    clickable: !0,
    renderBullet: function(e, t) {
        return '<li class="intro__btn swiper-pagination-bullet"></li>';
    },
    bulletActiveClass: 'intro__btn--active',
},

})
