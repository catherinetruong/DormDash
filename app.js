const carousel = document.querySelector('.restaurants-list');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const cardWidth = carousel.querySelector('.restaurant-card').offsetWidth + 10; // Including gap
const totalCards = carousel.children.length;
const visibleCards = 4;

prevBtn.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + 1, totalCards - visibleCards);
    updateCarousel();
});

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
