
var swiper = new Swiper(".swiper_contener", {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 50,
  slidesPerView: '3',
  /* mousewheel: true, */
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
/*   breakpoints: {
    320: {
      slidesPerView: 1.3,
    },
    600: {
      slidesPerView: 2.6,
    },
    1024: {
      slidesPerView: 2.9,
    }
  } */
    
})
