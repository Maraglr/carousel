const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');

let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    showItem(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
    showItem(currentIndex + 1);
});

function showItem(index) {
    if (index < 0) {
        index = items.length - 1;
    } else if (index >= items.length) {
        index = 0;
    }

    carouselInner.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
}
