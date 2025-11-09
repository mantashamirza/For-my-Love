// Floating Hearts Always On
function createHeart() {
  const h = document.createElement('div');
  h.className = "heart";
  h.innerHTML = ["💖","💗","💞","💕","❤️","🤍"][Math.floor(Math.random()*6)];
  h.style.left = Math.random()*100 + "vw";
  h.style.fontSize = (18 + Math.random()*20) + "px";
  h.style.animationDuration = (5 + Math.random()*4) + "s";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(), 9000);
}
setInterval(createHeart, 450);

// Promise Reveal + Gallery Fade
const btn = document.getElementById("showPromiseBtn");
const promise = document.getElementById("promiseContainer");
const gallery = document.getElementById("mobileGallery");

btn.addEventListener("click", () => {
  promise.style.display = "block";
  promise.style.animation = "fadeSlide 1.2s ease-out";
  setTimeout(() => {
    gallery.style.display = "block";
  }, 1200);
  btn.style.opacity = "0.5";
});

