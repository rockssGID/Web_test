const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    effect: 'coverflow',
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,
    mousewheel: true,
	centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
		clickable: true,
      },
/* 
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      }, */
  
      coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 0,
		modifier: 1,
		slideShadows: true,
	},
  
  });