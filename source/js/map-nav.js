// open map nav

var mapBtn = document.querySelector(".location__btn");

mapBtn.addEventListener("click", function() {
  mapBtn.classList.toggle("location__btn--active");
  document.querySelector(".location__map__list").classList.toggle("location__map__list--open");
})
