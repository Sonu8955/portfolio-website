```javascript
// Active Navbar Links

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// Navbar Shadow Effect

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.3)";

    }

    else {

        navbar.style.boxShadow = "none";

    }

});


// Scroll Reveal Animation

const revealElements =
document.querySelectorAll(
".card, .project, .stat-box, #about, #contact, #achievements"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight =
        window.innerHeight;

        const elementTop =
        element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {

            element.style.opacity = "1";
            element.style.transform =
            "translateY(0)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
    "translateY(40px)";

    element.style.transition =
    "all 0.8s ease";

});

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();


// Welcome Message

window.addEventListener("load", () => {

    console.log(
    "Welcome to Sonu Kumari Portfolio 🚀"
    );

});
```
