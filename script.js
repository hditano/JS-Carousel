// Variables
const previousButton = document.querySelector('.previous-btn');
const nextButton = document.querySelector('.next-btn');

const slides = document.querySelectorAll('.carousel-images');
const totalSlides = slides.length;
let currentSlide = 0;

// Event Listeners
previousButton.addEventListener('click', previousImage);
nextButton.addEventListener('click', nextImage);

// Functions
function hideAllSlides() {
    for(let slide of slides) {
        slide.classList.remove('carousel-visible');
        slide.classList.add('carousel-hidden');
    }
}

function previousImage() {
    hideAllSlides();

    if(currentSlide === 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide--;
    }
    slides[currentSlide].classList.add('carousel-visible');
}

function nextImage() {
    hideAllSlides();

    if(currentSlide === totalSlides - 1) {
        currentSlide = 0;
    } else {
        currentSlide++
    }
    slides[currentSlide].classList.add('carousel-visible');
}