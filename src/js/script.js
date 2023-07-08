let HamburgerButton = document.getElementById('menu-btn');
let MobileMenu = document.getElementById('mobile-menu');
let body = document.getElementById('body');

HamburgerButton.addEventListener('click', () =>{
    MobileMenu.classList.toggle('hamburger-button-toggle')
    HamburgerButton.classList.toggle('open')
})