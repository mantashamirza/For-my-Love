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

// ❤️ Floating Hearts - instant start, smooth flow, no layout damage
function createHeart() {
  const h = document.createElement("div");
  h.className = "heart";
  const emojis = ["💖", "💗", "💞", "💕", "❤️", "🤍"];
  h.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = (18 + Math.random() * 20) + "px";
  h.style.animationDuration = (5 + Math.random() * 3) + "s";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 8000);
}

// Create a few instantly on load
for (let i = 0; i < 10; i++) {
  createHeart();
}

// Continue endlessly
setInterval(createHeart, 450);

