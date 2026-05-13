// ================= NAVBAR SHADOW =================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(10, 10, 10, 0.95)";
        navbar.style.backdropFilter = "blur(12px)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.35)";
        navbar.style.transition = "0.3s ease";

    } else {

        navbar.style.background = "transparent";
        navbar.style.backdropFilter = "blur(0px)";
        navbar.style.boxShadow = "none";

    }

});


// ================= SMOOTH SCROLL =================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ================= ACTIVE NAV LINK =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

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


// ================= HERO IMAGE ANIMATION =================

const heroImage = document.querySelector(".hero-image img");

if (heroImage) {

    heroImage.animate(
        [
            { transform: "translateY(0px)" },
            { transform: "translateY(-15px)" },
            { transform: "translateY(0px)" }
        ],
        {
            duration: 4000,
            iterations: Infinity
        }
    );

}


// ================= FADE IN ANIMATION =================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".section, .project-card, .skill-card, .profile-card")
    .forEach((el) => observer.observe(el));
