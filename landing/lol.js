const slideText = document.getElementById('slideText');
const headerImage = document.getElementById('headerImage');
let hasAnimated = false;

function showText() {
  if (!hasAnimated) {
    slideText.classList.add('visible');
    hasAnimated = true;
  }
}

// Scroll trigger
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    showText();
  }
});

// Touch/click on image
headerImage.addEventListener('click', showText);
headerImage.addEventListener('touchstart', showText);
