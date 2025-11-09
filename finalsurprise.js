// Floating Hearts — always active
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  const hearts = ['💖','💞','💕','❤️','🤍'];
  heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (16 + Math.random() * 20) + 'px';
  heart.style.animationDuration = (5 + Math.random() * 3) + 's';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}
setInterval(createHeart, 400);

// Reveal Promise
function revealPromise() {
  document.getElementById('reveal').style.display = 'block';
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}
