$(document).ready(function() {
    // Обработчик для header_burger
    $('.header_burger').click(function(event) {
      // Останавливаем распространение события, чтобы не закрывался по клику на саму кнопку
      event.stopPropagation();
      
      // Если открыто header_menu_2, закрываем его
      if ($('.header_menu_2').hasClass('active')) {
        $('.header_menu_2').removeClass('active');
      } else {
        // Иначе переключаем header_menu
        $('.header_menu').toggleClass('active');
      }
  
      // Переключаем состояние кнопки
      $('.header_burger').toggleClass('active');
    });
  
    // Обработчик для header_link.catalog
    $('.header_link.catalog').click(function(event) {
      event.stopPropagation(); // Останавливаем распространение события
      $('.header_menu').removeClass('active'); // Закрываем header_menu
      $('.header_menu_2').addClass('active'); // Открываем header_menu_2
    });
  
    // Обработчик для клика вне меню или кнопки
    $(document).click(function(event) {
      // Если клик был вне элементов меню и кнопки, закрываем все меню
      if (!$(event.target).closest('.header_burger, .header_menu, .header_menu_2').length) {
        $('.header_menu').removeClass('active');
        $('.header_menu_2').removeClass('active');
        $('.header_burger').removeClass('active');
      }
    });
  });
  