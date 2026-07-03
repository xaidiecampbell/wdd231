// store the selected elements that we are going to use
const navButton = document.querySelector('#nav-button');
const navLinks = document.querySelector('#nav-bar');

// toggle the show class off and on
navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
    // navLinks.classList.toggle('show');
});

// Select the nav element
const navBar = document.querySelector('#nav-bar');