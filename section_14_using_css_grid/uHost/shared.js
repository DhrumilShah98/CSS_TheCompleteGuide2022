// Buttons
let selectPlanButtons = document.querySelectorAll('.plan button')
let modalNoBtn = document.querySelector('.modal__action--negative');
let toggleMobileNavBtn = document.querySelector('.toggle-button');

// Mobile Navigation
let mobileNav = document.querySelector('.mobile-nav');

// Modal
let modal = document.querySelector('.modal');

// Backdrop
let backdrop = document.querySelector('.backdrop');

// Click Listener for all Plans
for (let i = 0; i < selectPlanButtons.length; i++) {
    const selectPlanButton = selectPlanButtons[i];
    selectPlanButton.addEventListener('click', () => {
        backdrop.style.display = 'block';
        modal.style.display = 'block';
    });
};

// Click Listener to show Mobile Navigation
toggleMobileNavBtn.addEventListener('click', () => {
    backdrop.style.display = 'block';
    mobileNav.style.display = 'block';
});

// Close Modal, Mobile Navigation, and Backdrop
const close = () => {
    if (modal) {
        modal.style.display = 'none';
    }
    mobileNav.style.display = 'none';
    backdrop.style.display = 'none';
}

// Click Listener to close backdrop
backdrop.addEventListener('click', close);

if (modalNoBtn) {
    modalNoBtn.addEventListener('click', close);
}