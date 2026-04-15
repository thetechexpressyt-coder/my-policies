const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;
});

// Add hover effects for links
const links = document.querySelectorAll("a, button, .card");

links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursorOutline.style.transform = "translate(-50%, -50%) scale(2)";
        cursorOutline.style.borderColor = "white";
        cursorOutline.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        cursorDot.style.transform = "translate(-50%, -50%) scale(0.5)";
    });

    link.addEventListener("mouseleave", () => {
        cursorOutline.style.transform = "translate(-50%, -50%) scale(1)";
        cursorOutline.style.borderColor = "rgba(255, 255, 255, 0.5)";
        cursorOutline.style.backgroundColor = "transparent";
        cursorDot.style.transform = "translate(-50%, -50%) scale(1)";
    });
});

// Center initial position
cursorDot.style.left = "50%";
cursorDot.style.top = "50%";
cursorDot.style.transform = "translate(-50%, -50%)";

cursorOutline.style.left = "50%";
cursorOutline.style.top = "50%";
cursorOutline.style.transform = "translate(-50%, -50%)";
