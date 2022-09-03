//Choose Plan Buttons
let selectPlanButtons = document.querySelectorAll('.plan button')

// Modal No Button
let modalNoBtn = document.querySelector('.modal__action--negative');

// Mobile Nav Toggle Button
let toggleMobileNavBtn = document.querySelector('.toggle-button');

// Call To Action Button
let ctaButton = document.querySelector('.main-nav__item--cta');

// Mobile Navigation
let mobileNav = document.querySelector('.mobile-nav');

// Modal
let modal = document.querySelector('.modal');

// Backdrop
let backdrop = document.querySelector('.backdrop');

// Show Backdrop
const showBackdrop = () => {
    backdrop.style.display = 'block'
    setTimeout(() => {
        backdrop.classList.add('open');
    }, 10);
};

// Hide Backdrop
const hideBackdrop = () => {
    backdrop.classList.remove('open');
    setTimeout(() => {
        backdrop.style.display = 'none'
    }, 200); /** 200ms = 0.2s = Is same as what we have set in CSS transition */
};

// Close Modal, Mobile Navigation, and Backdrop
const close = () => {
    if (modal) {
        modal.classList.remove('open');
    }
    mobileNav.classList.remove('open');
    hideBackdrop();
};

// Click Listener for all Plans
for (let i = 0; i < selectPlanButtons.length; i++) {
    const selectPlanButton = selectPlanButtons[i];
    selectPlanButton.addEventListener('click', () => {
        showBackdrop();
        modal.classList.add('open');
    });
};

// Click Listener to show Mobile Navigation
toggleMobileNavBtn.addEventListener('click', () => {
    showBackdrop();
    mobileNav.classList.add('open');
});

// Click Listener to close Backdrop
backdrop.addEventListener('click', close);

// Click Listener to close Modal
if (modalNoBtn) {
    modalNoBtn.addEventListener('click', close);
}

// Animation Start Event
ctaButton.addEventListener('animationstart', (event) => {
    console.log('Animation Started', event);
});

// Animation End Event
ctaButton.addEventListener('animationend', (event) => {
    console.log('Animation End', event);
});

// Animation Iteration Event
ctaButton.addEventListener('animationiteration', (event) => {
    console.log('Animation Iteration', event);
});