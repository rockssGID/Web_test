$(document).ready(function () {
  // Для ПК-меню
  $('.catalog_pc').click(function () {
    $('.control_menu_pc_catalog').toggleClass('open_catalog_pc');
    updateMenuBurgerState(); // Обновляем состояние menu_burger_mobile
  });

  $(document).click(function (event) {
    if (
      !$(event.target).closest('.control_menu_pc_catalog').length &&
      !$(event.target).closest('.catalog_pc').length &&
      !$(event.target).closest('.menu_mobile').length &&
      !$(event.target).closest('.menu_catalog_mobile').length
    ) {
      $('.control_menu_pc_catalog').removeClass('open_catalog_pc');
      updateMenuBurgerState(); // Обновляем состояние menu_burger_mobile
    }
  });

  // Каталог под меню
  function adjustSecondMenu() {
    var firstMenuHeight = $('.control_menu_pc').outerHeight();
    $('.control_menu_pc_catalog').css('top', firstMenuHeight);
  }

  adjustSecondMenu();
  $(window).resize(function () {
    adjustSecondMenu();
  });

  // Для мобильного меню
  $('.menu_burger_mobile').click(function () {
    if ($(this).hasClass('active')) {
      // Если меню бургер активно, закрываем меню
      $('.menu_mobile').removeClass('open_menu_mobile');
      $('.menu_catalog_mobile').removeClass('open_catalog_mobile');
      $('.control_menu_pc_catalog').removeClass('open_catalog_pc');
    } else {
      // Если меню бургер не активно, открываем мобильное меню
      $('.menu_mobile').toggleClass('open_menu_mobile');
      $('.menu_catalog_mobile').removeClass('open_catalog_mobile');
      $('.control_menu_pc_catalog').removeClass('open_catalog_pc');
    }
    updateMenuBurgerState(); // Обновляем состояние menu_burger_mobile
  });

  $('.button_catalog_mobile').click(function () {
    $('.menu_catalog_mobile').toggleClass('open_catalog_mobile');
    $('.menu_mobile').removeClass('open_menu_mobile');
    updateMenuBurgerState(); // Обновляем состояние menu_burger_mobile
  });

  $(document).click(function (event) {
    if (
      !$(event.target).closest('.menu_mobile').length &&
      !$(event.target).closest('.menu_burger_mobile').length &&
      !$(event.target).closest('.menu_catalog_mobile').length &&
      !$(event.target).closest('.button_catalog_mobile').length
    ) {
      $('.menu_mobile').removeClass('open_menu_mobile');
      $('.menu_catalog_mobile').removeClass('open_catalog_mobile');
      updateMenuBurgerState(); // Обновляем состояние menu_burger_mobile
    }
  });

  // Функция для обновления состояния menu_burger_mobile
  function updateMenuBurgerState() {
    if (
      $('.menu_mobile').hasClass('open_menu_mobile') || // Проверяем мобильное меню
      $('.menu_catalog_mobile').hasClass('open_catalog_mobile') || // Проверяем мобильный каталог
      $('.control_menu_pc_catalog').hasClass('open_catalog_pc') // Проверяем ПК-каталог
    ) {
      $('.menu_burger_mobile').addClass('active'); // Добавляем класс
    } else {
      $('.menu_burger_mobile').removeClass('active'); // Убираем класс
    }
  }
});
