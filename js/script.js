const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];

        // Переменные для отслеживания свайпа
        this.touchStartX = 0;
        this.touchEndX = 0;

        // Инициализация свайпа
        this.addSwipeEvents();
    }

    addSwipeEvents() {
        // Начало касания
        this.carouselContainer.addEventListener('touchstart', (e) => {
            this.touchStartX = e.changedTouches[0].clientX; // Сохраняем начальную координату X
        });

        // Завершение касания
        this.carouselContainer.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].clientX; // Сохраняем конечную координату X
            this.handleSwipe(); // Обработка свайпа
        });
    }

    handleSwipe() {
        const swipeThreshold = 50; // Минимальная длина свайпа для действия
        if (this.touchEndX < this.touchStartX - swipeThreshold) {
            this.setCurrentState({ className: 'gallery-controls-next' }); // Свайп влево
        }
        if (this.touchEndX > this.touchStartX + swipeThreshold) {
            this.setCurrentState({ className: 'gallery-controls-previous' }); // Свайп вправо
        }
    }

    updateGallery() {
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery-item-1', 'gallery-item-2', 'gallery-item-3', 'gallery-item-4', 'gallery-item-5');
        });
        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`gallery-item-${i + 1}`);
        });
    }

    setCurrentState(direction) {
        if (direction.className === 'gallery-controls-previous') {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else if (direction.className === 'gallery-controls-next') {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

    setControls() {
        this.carouselControls.forEach(control => {
            const button = document.createElement('button');
            button.className = `gallery-controls-${control}`;
            button.innerText = control;
            galleryControlsContainer.appendChild(button);
        });
    }

    useControls() {
        const trigger = [...galleryControlsContainer.children];
        trigger.forEach(control => {
            control.addEventListener('click', () => {
                this.setCurrentState(control);
            });
        });
    }
}

// Инициализация карусели
const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);
exampleCarousel.setControls();
exampleCarousel.useControls();

