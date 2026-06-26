// Page Loaded

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Header Effect

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.background = "rgba(0,0,0,0.9)";
        header.style.boxShadow = "0 0 20px rgba(0,217,255,.2)";
    } else {
        header.style.background = "rgba(255,255,255,.05)";
        header.style.boxShadow = "none";
    }

});


// Typing Effect

const textArray = [
    "Digital Marketing Expert",
    "Social Media Marketer",
    "Shopify Store Designer",
    "Graphic Designer",
    "Video Editor"
];

let textIndex = 0;
let charIndex = 0;

const typingElement = document.querySelector(".hero-text h2");

function typeText() {

    if (!typingElement) return;

    if (charIndex < textArray[textIndex].length) {

        typingElement.textContent +=
            textArray[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText, 100);

    } else {

        setTimeout(eraseText, 2000);
    }
}

function eraseText() {

    if (charIndex > 0) {

        typingElement.textContent =
            textArray[textIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseText, 50);

    } else {

        textIndex++;

        if (textIndex >= textArray.length) {
            textIndex = 0;
        }

        setTimeout(typeText, 300);
    }
}

window.addEventListener("DOMContentLoaded", () => {

    if (typingElement) {
        typingElement.textContent = "";
        setTimeout(typeText, 1000);
    }

});


// WhatsApp Pulse

const whatsappBtn = document.querySelector(".whatsapp");

if (whatsappBtn) {

    setInterval(() => {

        whatsappBtn.classList.add("pulse");

        setTimeout(() => {
            whatsappBtn.classList.remove("pulse");
        }, 1000);

    }, 3000);
}


// Active Menu

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }

    });

});


// GSAP Animations

if (typeof gsap !== "undefined") {

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero-text h3", {
        y: 100,
        opacity: 0,
        duration: 1
    });

    gsap.from(".hero-text h1", {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.3
    });

    gsap.from(".hero-text h2", {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.6
    });

    gsap.from(".hero-image img", {
        scale: 0,
        opacity: 0,
        duration: 1.5,
        rotate: 360
    });

    gsap.utils.toArray(
        ".card,.service-card,.project-card,.review-card"
    ).forEach(card => {

        gsap.from(card, {

            scrollTrigger: {
                trigger: card,
                start: "top 85%"
            },

            y: 100,
            opacity: 0,
            duration: 1

        });

    });

}


// Snow Effect

window.addEventListener("load", () => {

    const snowContainer =
        document.getElementById("snow");

    if (!snowContainer) return;

    for (let i = 0; i < 80; i++) {

        const snowflake =
            document.createElement("div");

        snowflake.classList.add("snowflake");

        snowflake.innerHTML = "❄";

        snowflake.style.left =
            Math.random() * 100 + "vw";

        snowflake.style.fontSize =
            (Math.random() * 15 + 8) + "px";

        snowflake.style.animationDuration =
            (Math.random() * 8 + 6) + "s";

        snowflake.style.animationDelay =
            Math.random() * 5 + "s";

        snowContainer.appendChild(snowflake);
    }

});