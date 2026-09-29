/* =====================================================
   PORTFOLIO JAVASCRIPT
===================================================== */


/* =====================================================
   TYPING EFFECT
===================================================== */

const roles = [
    "ECE Student",
    "Web Developer",
    "AI Enthusiast",
    "IoT Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.querySelector(".home-content h2");

function typeEffect() {

    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );
}

typeEffect();


/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show-section");

            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {

    observer.observe(section);

});


/* =====================================================
   UPDATE FOOTER YEAR
===================================================== */

const footerText = document.querySelector("footer p");

if (footerText) {

    const currentYear = new Date().getFullYear();

    footerText.textContent =
        `© ${currentYear} Nandini Barik. All Rights Reserved.`;

}


/* =====================================================
   NAVIGATION LINK ACTIVE EFFECT
===================================================== */

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.forEach((item) => {

            item.classList.remove("active");

        });

        link.classList.add("active");

    });

});


/* =====================================================
   BACK TO TOP BUTTON
===================================================== */

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.className = "back-to-top";

document.body.appendChild(backToTop);


window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});