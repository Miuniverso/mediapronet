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
