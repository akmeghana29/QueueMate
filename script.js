// Lottie Animation
var animation = lottie.loadAnimation({
  container: document.getElementById('lottie-animation'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'animation.json' 
});

let currentIndex = 0;
let isInView = false;
let animations = [];
let slideInterval;
let animationPaths = [
  "animation1.json",
  "animation2.json",
  "animation3.json",
  "animation4.json"
];

// Load all animations into their respective divs
function loadAllAnimations() {
  for (let i = 0; i < 4; i++) {
    let container = document.getElementById(`anim${i + 1}`);
    let anim = lottie.loadAnimation({
      container: container,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: animationPaths[i]
    });
    animations.push(anim);
  }
}

// Function to apply the active class correctly
function showSlide(index) {
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');

  // Remove 'active' from all slides
  slides.forEach(slide => slide.classList.remove('active'));

  // Add 'active' to current slide
  slides[index].classList.add('active');

  // Slide to current index
  track.style.transform = `translateX(-${index * 400}px)`;
}

// Start sliding from second slide after delay
function startSliding() {
  showSlide(currentIndex); // Show first slide

  slideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % 4; // THEN update index
    showSlide(currentIndex);
  }, 3000);
}

// Scroll detection to activate animations and slider
window.addEventListener("scroll", () => {
  const section = document.getElementById("animated-showcase");
  const rect = section.getBoundingClientRect();
  const inView = rect.top < window.innerHeight && rect.bottom > 0;

  if (inView && !isInView) {
    isInView = true;
    loadAllAnimations();
    startSliding();
  } else if (!inView && isInView) {
    isInView = false;
    clearInterval(slideInterval);
  }
});
const offerTexts = [
  "Live Queue Status and Notifications",
  "Smart Location Support",
  "Instant Booking",
  "Convenience at your fingertips"
];

const benefitTexts = [
  "Get notified exactly when your turn is near.",
  "Book queues for hospitals, banks, offices — wherever you are.",
  "Book your turn in just a few clicks, sitting at home.",
  "Say goodbye to long waiting hours."
];
