# CSS and JavaScript

- Snippet on how we can leverage javascript to manipulate HTML and CSS.

```JS
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


for (let i = 0; i < selectPlanButtons.length; i++) {
    const selectPlanButton = selectPlanButtons[i];
    selectPlanButton.addEventListener('click', () => {
        backdrop.style.display = 'block';
        modal.style.display = 'block';
    });
};

toggleMobileNavBtn.addEventListener('click', () => {
    backdrop.style.display = 'block';
    mobileNav.style.display = 'block';
});

const close = () => {
    modal.style.display = 'none';
    mobileNav.style.display = 'none';
    backdrop.style.display = 'none';
}

backdrop.addEventListener('click', close);
modalNoBtn.addEventListener('click', close);
```

# Property Notation

- The property notation has a syntax as below (This syntax is called camelCase syntax)
  - background-image is backgroundImage
  - background-position is backgroundPosition
  - border-radius is borderRadius

# Useful Resources & Links

- [JavaScript Basics](https://academind.com/learn/javascript)
- [JavaScript CSS Styles](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)
- [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
