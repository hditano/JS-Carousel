// Variables
const previousButton = document.querySelector('.previous-btn');
const nextButton = document.querySelector('.next-btn');

const slides = document.querySelectorAll('.carousel-images');
const totalSlides = 3;
let currentSlide = 0;

// Event Listeners
previousButton.addEventListener('click', previousImage);
nextButton.addEventListener('click', nextImage);

// Functions
function hideAllSlides() {
    for(let slide of slides) {
        slide.classList.remove('carousel-visible');
    }
}

function previousImage() {
    console.log('clicked');
}

function nextImage() {
    if(slides === totalSlides - 1) {
        currentSlide = 0;
    } else {
        slides[currentSlide].classList.add('carousel-visible');
        currentSlide++
    }
}