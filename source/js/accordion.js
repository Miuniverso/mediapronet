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
