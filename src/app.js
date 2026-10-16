// Active Navigation Highlight

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

function updateActiveNav() {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveNav);



// Navbar Scroll Effect

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
    } else {
        header.style.boxShadow = "none";
    }

});



// Smooth Scroll for Navigation

navLinks.forEach(link => {

    link.addEventListener("click", (e) => {

        const targetId = link.getAttribute("href");

        if (targetId.startsWith("#")) {

            e.preventDefault();

            const targetSection = document.querySelector(targetId);

            if (targetSection) {

                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: "smooth"
                });

            }
        }

    });

});



// Fade-In Animation on Scroll

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

document
    .querySelectorAll(".section, .card, .timeline-item")
    .forEach(item => {
        observer.observe(item);
    });