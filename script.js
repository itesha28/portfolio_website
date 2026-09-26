/* ================================
   THEME TOGGLE
================================ */

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light");

    themeToggle.textContent = "☀️";

}


themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        localStorage.setItem("theme", "light");

        themeToggle.textContent = "☀️";

    } else {

        localStorage.setItem("theme", "dark");

        themeToggle.textContent = "🌙";

    }

});


/* ================================
   MOBILE MENU
================================ */

const menuToggle = document.getElementById("menu-toggle");

const navMenu = document.getElementById("nav-menu");


menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll("#nav-menu a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


/* ================================
   TYPING ANIMATION
================================ */

const typingText = document.getElementById("typing-text");

const words = [
    "CSE Student",
    "Web Developer",
    "Programmer",
    "Problem Solver"
];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];


    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;


        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {

                wordIndex = 0;

            }

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );

}


typeEffect();


/* ================================
   SCROLL REVEAL
================================ */

const revealElements =
    document.querySelectorAll(".reveal");


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(function (element) {

    observer.observe(element);

});


/* ================================
   CERTIFICATE MODAL
================================ */

const certificateModal =
    document.getElementById("certificate-modal");

const certificateImage =
    document.getElementById("certificate-image");

const certificateTitle =
    document.getElementById("certificate-title");


function openCertificate(imagePath, title) {

    certificateImage.src = imagePath;

    certificateImage.alt = title;

    certificateTitle.textContent = title;

    certificateModal.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeCertificate() {

    certificateModal.classList.remove("active");

    document.body.style.overflow = "";

}


/* Click outside image to close */

certificateModal.addEventListener(
    "click",
    function (event) {

        if (event.target === certificateModal) {

            closeCertificate();

        }

    }
);


/* Press ESC to close */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeCertificate();

        }

    }
);


/* ================================
   FOOTER YEAR
================================ */

document.getElementById("year").textContent =
    new Date().getFullYear();