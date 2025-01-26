/* $('input').on('change', function() {
    $('body').toggleClass('blue');
  }); */
  /* const cardsContainer = document.querySelector('.cards');
  let isDown = false; // Удерживается ли мышь или палец на экране
  let startX; // Начальная позиция X
  let scrollLeft; // Начальная прокрутка
  
  // Начало взаимодействия
  cardsContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    cardsContainer.classList.add('active'); // Для визуализации (опционально)
    startX = e.pageX - cardsContainer.offsetLeft;
    scrollLeft = cardsContainer.scrollLeft;
  });
  cardsContainer.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - cardsContainer.offsetLeft;
    scrollLeft = cardsContainer.scrollLeft;
  });
  
  // Конец взаимодействия
  cardsContainer.addEventListener('mouseup', () => {
    isDown = false;
    cardsContainer.classList.remove('active'); // Убираем визуализацию (опционально)
  });
  cardsContainer.addEventListener('touchend', () => {
    isDown = false;
  });
  
  // Перемещение
  cardsContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return; // Если мышь не нажата — выходим
    e.preventDefault();
    const x = e.pageX - cardsContainer.offsetLeft;
    const walk = (x - startX) * 1; // Коэффициент для скорости прокрутки
    cardsContainer.scrollLeft = scrollLeft - walk;
  });
  cardsContainer.addEventListener('touchmove', (e) => {
    if (!isDown) return; // Если палец не удерживается — выходим
    const x = e.touches[0].pageX - cardsContainer.offsetLeft;
    const walk = (x - startX) * 1; // Коэффициент для скорости прокрутки
    cardsContainer.scrollLeft = scrollLeft - walk;
  }); */
  const cardsContainer = document.querySelector('.cards');
let isDragging = false; // Флаг для отслеживания свайпа
let startX = 0; // Начальная позиция X
let scrollLeft = 0; // Позиция прокрутки в начале

// Обработчик для начала взаимодействия (нажатие/касание)
function startDragging(e) {
  isDragging = true;
  startX = e.touches ? e.touches[0].pageX : e.pageX; // Определяем начальную точку
  scrollLeft = cardsContainer.scrollLeft; // Запоминаем текущую прокрутку
}

// Обработчик для завершения взаимодействия
function stopDragging() {
  isDragging = false; // Отключаем флаг взаимодействия
}

// Обработчик для перемещения
function handleDragging(e) {
  if (!isDragging) return; // Если не в режиме свайпа, ничего не делаем
  const x = e.touches ? e.touches[0].pageX : e.pageX; // Текущая позиция X
  const walk = (startX - x) * 1.5; // Определяем расстояние прокрутки (коэффициент скорости 1.5)
  cardsContainer.scrollLeft = scrollLeft + walk; // Меняем позицию прокрутки
}

// Добавляем события для мыши
cardsContainer.addEventListener('mousedown', startDragging);
cardsContainer.addEventListener('mousemove', handleDragging);
cardsContainer.addEventListener('mouseup', stopDragging);
cardsContainer.addEventListener('mouseleave', stopDragging);

// Добавляем события для сенсоров
cardsContainer.addEventListener('touchstart', startDragging);
cardsContainer.addEventListener('touchmove', handleDragging);
cardsContainer.addEventListener('touchend', stopDragging);

  