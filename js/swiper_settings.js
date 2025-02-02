/* const swiper = new Swiper('.swiper_contener, .swiper_stock', {
    direction: 'horizontal',
    effect: 'coverflow',
    loop: true,
    spaceBetween: -150,
    slidesPerView: 'auto',
    mousewheel: true,
	  centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
		clickable: true,
      },

/*       autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      }, */
  
/*   coverflowEffect: {
		rotate: 0,
		stretch: -50,
		depth: 100,
		modifier: 1.5,
		slideShadows: true,
	},
  breakpoints: {
    320: {
      slidesPerView: 1.3,
    },
    600: {
      slidesPerView: 2.6,
    },
    1024: {
      slidesPerView: 2.9,
    }
}
  }); */

var swiper = new Swiper(".swiper_contener", {
  direction: 'horizontal',
  loop: true,
  spaceBetween: -150,
  slidesPerView: 'auto',
  mousewheel: true,
  centeredSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1.3,
    },
    600: {
      slidesPerView: 2.6,
    },
    1024: {
      slidesPerView: 2.9,
    }
  }
    
})
var swiper2 = new Swiper(".swiper_stock", {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 50,
  slidesPerView: 3,
  mousewheel: true,
  centeredSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1.3,
    },
    600: {
      slidesPerView: 2.6,
    },
    1024: {
      slidesPerView: 2.9,
    }
  }
})