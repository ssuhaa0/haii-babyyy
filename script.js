function openMessage() {

    const home = document.getElementById("home");
    const burst = document.getElementById("heart-burst");
    const wish = document.getElementById("wish");
    const song = document.getElementById("ourSong");

    // PLAY LAGU 🎵
    song.currentTime = 11;
    song.play();

    // HEART BURST 💕
    for (let i = 0; i < 25; i++) {

        const heart = document.createElement("span");

        heart.innerHTML = ["♡", "♥", "💕", "🤎", "✨"][
            Math.floor(Math.random() * 5)
        ];

        heart.style.position = "fixed";
        heart.style.left = "50%";
        heart.style.top = "50%";
        heart.style.fontSize = "30px";
        heart.style.zIndex = "9999";
        heart.style.pointerEvents = "none";

        const x = (Math.random() - 0.5) * 500;
        const y = (Math.random() - 0.5) * 400;

        burst.appendChild(heart);

        heart.animate(
            [
                {
                    transform: "translate(-50%, -50%) scale(0)",
                    opacity: 1
                },
                {
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1.5)`,
                    opacity: 0
                }
            ],
            {
                duration: 1200,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            heart.remove();
        }, 1200);
    }

    // WISH MUNCUL 💌
    setTimeout(() => {

        home.style.display = "none";

        wish.style.display = "block";

        setTimeout(() => {
            wish.classList.add("show");
        }, 50);

    }, 900);
}