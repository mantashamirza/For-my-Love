// Reveal Promise + Show Magical Text + Mobile Gallery
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("revealBtn");
  const reveal = document.getElementById("reveal");
  const mobileGallery = document.getElementById("mobileGallery");
  const magicLove = document.querySelector(".magic-love");

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    reveal.style.display = "block";
    btn.style.opacity = "0.5";

    // Show "I Love You" on all devices
if (magicLove) {
  magicLove.style.display = "block";
}

    // Show gallery on mobile after reveal
    if (window.innerWidth <= 768 && mobileGallery) {
      mobileGallery.style.display = "block";
    }
  });
});

// Floating Hearts - instant start, safe for mobile & desktop
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  const emojis = ['💖', '💗', '💞', '💕', '❤️', '🤍'];
  heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 6 + Math.random() * 4 + 's';
  heart.style.fontSize = (16 + Math.random() * 16) + 'px';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 9000);
}

// Create a few instantly
for (let i = 0; i < 10; i++) {
  createHeart();
}

// Continue endlessly
setInterval(createHeart, 450);


