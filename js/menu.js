// Функция для переключения видимости меню и закрытия остальных
function toggleMenu(menuId, menusToClose) {
  const menu = document.getElementById(menuId);

  // Закрыть все другие меню
  menusToClose.forEach(id => {
    const otherMenu = document.getElementById(id);
    if (otherMenu && otherMenu !== menu) {
      otherMenu.style.display = 'none';
    }
  });

  // Переключить текущее меню
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

// Открытие/закрытие выпадающего меню каталога для ПК
document.getElementById('catalog-pc').addEventListener('click', function (e) {
  e.preventDefault();
  toggleMenu('drop-catalog-pc', ['drop-menu-mobil', 'drop-catalog-mobil']);
  e.stopPropagation();
});

// Открытие/закрытие выпадающего меню каталога для мобилки
document.getElementById('catalog-mobil').addEventListener('click', function (e) {
  e.preventDefault();
  toggleMenu('drop-catalog-mobil', ['drop-menu-mobil', 'drop-catalog-pc']);
  e.stopPropagation();
});

// Открытие/закрытие основного мобильного меню
document.getElementById('menu-mobil').addEventListener('click', function (e) {
  e.preventDefault();
  toggleMenu('drop-menu-mobil', ['drop-catalog-mobil', 'drop-catalog-pc']);
  e.stopPropagation();
});

// Закрытие всех меню при клике вне
document.addEventListener('click', function () {
  ['drop-catalog-pc', 'drop-menu-mobil', 'drop-catalog-mobil'].forEach(id => {
    const menu = document.getElementById(id);
    if (menu) {
      menu.style.display = 'none';
    }
  });
});

// Предотвращаем закрытие меню при клике внутри него
['drop-catalog-pc', 'drop-catalog-mobil', 'drop-menu-mobil'].forEach(id => {
  document.getElementById(id).addEventListener('click', function (e) {
    e.stopPropagation();
  });
});

