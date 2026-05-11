// Smooth Navbar Shadow On Scroll

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
    } else {
        navbar.style.boxShadow = "none";
    }

});
