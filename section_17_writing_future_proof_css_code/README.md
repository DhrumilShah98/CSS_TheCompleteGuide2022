# CSS Variables

- `CSS variables` is a relatively new feature that allows us to reuse values in multiple places.

- Syntax

  ```CSS
  :root{
    --my-color: #fa923f;
  }
  .element-1{
    color: var(--my-color);
  }
  .element-2{
    color: var(--my-color);
  }
  .element-3{
    color: var(--my-color, #fa923f); <!-- Fallback values -->
  }
  ```

# Browser Support

- Browsers implement new features differently and at a different speed. To ensure things doesn't break, we can specify a property multiple times in different ways.

- Syntax

  ```CSS
  element {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  }
  ```

- This won't break anything but will ensure that this works on old browsers.

# Autoprefixer CSS online

- [Autoprefixer](https://autoprefixer.github.io/) is a PostCSS plugin which parses your CSS and adds vendor prefixes

# Support Queries

- Executes if the property is available in the browser.

```CSS
@supports (display: grid){
  .container {
    display: grid
  }
}
```

# Polyfills

- A Polyfill is a JavaScript Package which enables certain CSS Features in Browsers which would not support it otherwise.

# Choosing CSS Names Correctly

- Use kebab-case (Because CSS is case insensitive).
- Name by feature (Example .page-title).
- Convention we can use - BEM (Block Element Modifier). A uniform and consistent way of naming your CSS classes.
  - Syntax: `.BLOCK__ELEMENT--MODIFIER` (Example: `.main-menu__item--size-big`, `.button__--success`).

# Useful Resources & Links

- [CSS Modules & Working Groups](https://www.w3.org/TR/tr-groups-all#tr_Cascading_Style_Sheets__CSS__Working_Group)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)
- [Vendor Prefixes](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix)
- [Which Vendor Prefixes should you use?](http://shouldiprefix.com/)
- [@supports](https://developer.mozilla.org/en-US/docs/Web/CSS/%40supports)
- [BEM in Detail](http://getbem.com/introduction/)
- [An introduction to Bootstrap 4](https://academind.com/learn/css/bootstrap-4-tutorial/)
- [CSS Polyfills](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills)
