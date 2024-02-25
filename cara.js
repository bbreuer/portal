const prevButton = document.querySelector('[data-carousel-prev]');
const nextButton = document.querySelector('[data-carousel-next]');
const carouselItems = document.querySelectorAll('[data-carousel-item]');
const totalItems = carouselItems.length;
let currentIndex = 0;

function showItem(index) {
    carouselItems.forEach((item, idx) => {
        if (idx === index) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

function goToNext() {
    currentIndex = (currentIndex + 1) % totalItems;
    showItem(currentIndex);
}

function goToPrev() {
    currentIndex = currentIndex === 0 ? totalItems - 1 : currentIndex - 1;
    showItem(currentIndex);
}

prevButton.addEventListener('click', goToPrev);
nextButton.addEventListener('click', goToNext);

// Automatically switch to the next image every 5 seconds
let intervalId = setInterval(goToNext, 5000);

// Stop the auto-switching when a button is clicked
function stopCarousel() {
    clearInterval(intervalId);
}

prevButton.addEventListener('click', stopCarousel);
nextButton.addEventListener('click', stopCarousel);
