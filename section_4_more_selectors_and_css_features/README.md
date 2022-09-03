# More on CSS classes

### 1. More than 1 class applied to a tag.

```HTML
<div class="class1 class2">Something</div>
```

```CSS
.class1 {
    border: 1px solid blue;
}

.class2 {
    border: 2px solid red;
}
```

- First, `class1` properties are applied and then `class2`. Order in which they are added in HTML DOES NOT matter but order in which they are listed in css file DOES matter. This is the reason why in the above example we'll have `div` with border `2px solid red`.

### 2. A class selected in a special way.

```HTML
<a href="#" class="active">I am special</a>
```

```CSS
a.active {

}
```

- This way of selection will select all `a` tags that has `active` class applied.

# CSS Class Selectors vs ID Selectors

### class

- Class selectors are re-usable. We can add same class to more than one HTML elements to achieve similar styling.
- Allow us to "mark" and name things for purely styling purposes only.
- Most-used selector type.

## id

- Only used once per page.
- Also got non-CSS meaning (e.g., on-page link)
- Use if available anyways.

# (Not) using !important

```CSS
div {
    color: red !important
}
```

- Overwrites specificity and all other selectors.

## Note - In general, don't use !important. Use specificity and rules to style the website according to the needs (and to write better CSS code in the end).

```CSS
.main-section {
  height: 800px;
  border: 1px solid #ccc !important;
  padding: 16px;
}

.highlighted {
  border: 2px solid #fa923f;
}
```

- Above code example will still render a border with `1px solid #css` because of `!important`.

# .not() psuedo-class

```CSS
a {
  text-decoration: none;
  color: white;
  margin: 10px;
}

a.active {
  color: #521751;
}

a:not(.active) {
  color: aqua;
}
```

- The above CSS code snipet indicates that target all `a` tags which do not have `.active` class.

# CSS & Browser Support

- [Can I Use](https://caniuse.com/)
- [Mozilla Web CSS Document](https://developer.mozilla.org/en-US/docs/Web/CSS)

# Useful Resources & Links

- [A discussion on "classes vs IDs"](https://stackoverflow.com/questions/12889362/difference-between-id-and-class-in-css-and-when-to-use-it)
- [When is using !important okay?](https://css-tricks.com/when-using-important-is-the-right-choice/)
- [The :not() pseudo class](https://developer.mozilla.org/en-US/docs/Web/CSS/:not)
- [Can I Use](https://caniuse.com/)
