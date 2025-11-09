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

// Floating Hearts — start instantly, continue forever
function createHeart() {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerHTML = ["💖","💗","💞","💕","❤️","🤍"][Math.floor(Math.random()*6)];
  h.style.left = Math.random()*100 + "vw";
  h.style.fontSize = (18 + Math.random()*18) + "px";
  h.style.animationDuration = (5 + Math.random()*3) + "s";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(), 7000);
}

// Create some instantly
for (let i = 0; i < 10; i++) {
  createHeart();
}

// Continue spawning new hearts forever
setInterval(createHeart, 400);
