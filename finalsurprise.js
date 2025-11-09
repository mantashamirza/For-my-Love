// SHOW PROMISE BUTTON ACTION
document.getElementById("showPromiseBtn").addEventListener("click", () => {
    document.getElementById("promiseContainer").style.display = "block";
});

// FLOATING HEARTS GENERATOR
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 5 + Math.random() * 3 + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 900);

// FIREFLY SPARKLE GENERATOR (slow)
function createSparkle() {
    const sp = document.createElement("div");
    sp.classList.add("sparkle");

    sp.style.left = Math.random() * 100 + "vw";
    sp.style.bottom = Math.random() * 30 + "vh";
    sp.style.animationDuration = 6 + Math.random() * 4 + "s";

    document.body.appendChild(sp);

    setTimeout(() => sp.remove(), 10000);
}

setInterval(createSparkle, 1200);
