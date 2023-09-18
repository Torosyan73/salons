const btnOpenMobileNav = document.querySelector('.btn-open-mobile-nav');
const btnCloseMobileNav = document.querySelector('.btn-close-mobile-nav');
const navListWrapper = document.querySelector('.nav__list-wrapper');
const navItem = document.querySelectorAll('.nav__item');
const body = document.body;

btnOpenMobileNav.addEventListener('click', function() {  
    navListWrapper.classList.add('nav__list-wrapper--show');
    body.classList.add('modal-open');
    navItem.forEach((item, index) => {
        item.addEventListener('click', () => {
            navListWrapper.classList.remove('nav__list-wrapper--show');
            body.classList.remove('modal-open');
        });
    });
});

btnCloseMobileNav.addEventListener('click', function() {
    navListWrapper.classList.remove('nav__list-wrapper--show');
    body.classList.remove('modal-open');
});