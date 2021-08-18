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
        slide[currentSlide].classList.remove('carousel-visible');
    }
}

function previousImage() {
    console.log('clicked');
}

function nextImage() {
    if(currentSlide === totalSlides - 1) {
        currentSlide = 0;
    } else {
        currentSlide++
    }
    slides[currentSlide].classList.add('carousel-visible');
}