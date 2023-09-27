const hamburgerButton = document.getElementById('hamburger')  /* grabs hamburger icon from index.html */
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show') /* for "About Me", "Projects", and "Contact Me" menu items at the top of the webpage */
}

hamburgerButton.addEventListener('click', toggleButton)