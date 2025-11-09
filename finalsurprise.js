// Reveal Promise Instantly
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("revealBtn");
  const reveal = document.getElementById("reveal");

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    reveal.style.display = "block";
    btn.style.opacity = "0.5";
  });
});

// Floating Hearts Forever
function createHeart() {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerHTML = ["💖","💗","💞","💕","❤️","🤍"][Math.floor(Math.random()*6)];
  h.style.left = Math.random()*100 + "vw";
  h.style.fontSize = (18 + Math.random()*18) + "px";
  h.style.animationDuration = (5 + Math.random()*3) + "s";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(), 8000);
}
setInterval(createHeart, 400);
