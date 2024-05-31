const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselInner = document.getElementById('carouselInner');

const images = [
    'assets/img/img.webp',
    'assets/img/img2.webp',
    'assets/img/img3.webp',
    'assets/img/img4.jpg',
    'assets/img/img5.jpg',
    'assets/img/img6.jpg',
    'assets/img/img7.jpg'
];

let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    showItem(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
    showItem(currentIndex + 1);
});

function showItem(index) {
    const totalImages = images.length;
    currentIndex = (index + totalImages) % totalImages;
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

images.forEach((image, index) => {
    const item = document.createElement('div');
    item.classList.add('carousel-item');
    const img = document.createElement('img');
    img.src = image;
    img.alt = `Image ${index + 1}`;
    item.appendChild(img);
    carouselInner.appendChild(item);
});
