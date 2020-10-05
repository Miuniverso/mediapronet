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
