// UI Variables
let menuToggle = document.getElementById('toggle-bars');
let menuNav = document.getElementById('menu-list');

// EventListeners
menuToggle.addEventListener('click', function () {
    menuNav.classList.toggle("nav-links");
});

