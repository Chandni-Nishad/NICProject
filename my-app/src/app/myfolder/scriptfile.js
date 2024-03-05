const cards = document.querySelectorAll('.card');
let currentIndex = 0;

function showNextCard() {
  cards[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % cards.length;
  cards[currentIndex].classList.add('active');
}

// Automatically show next card every 2 seconds
setInterval(showNextCard, 2000);
