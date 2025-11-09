// Sparkle generator
function createSparkle() {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    sparkle.style.left = Math.random() * window.innerWidth + "px";
    sparkle.style.top = window.innerHeight + "px";
    sparkle.style.animationDuration = (4 + Math.random() * 3) + "s";

    document.querySelector(".sparkle-container").appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 7000);
}

setInterval(createSparkle, 300);

// Open page function
function openSurprise() {
    window.location.href = "finalsurprise.html";
}
