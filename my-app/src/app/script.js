let slideIndex = 0;

function moveSlider(n) {
  const slides = document.querySelector('.slider');
  const cardWidth = document.querySelector('.card').offsetWidth;
  const slideWidth = cardWidth + 20; // Adjust for margin
  
  slideIndex += n;
  
  if (slideIndex < 0) {
    slideIndex = slides.children.length - 1;
  }
  if (slideIndex >= slides.children.length) {
    slideIndex = 0;
  }
  
  slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}


const cards = document.querySelectorAll('.imagecontainer');
let currentIndex = 0;

function showNextCard() {
  cards[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % cards.length;
  cards[currentIndex].classList.add('active');
}

// Automatically show next card every 2 seconds
setInterval(showNextCard, 2000);
