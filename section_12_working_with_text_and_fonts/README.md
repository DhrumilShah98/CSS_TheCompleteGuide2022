# Generic Families & Font Families

- Generic

  - serif
  - sans-serif
  - cursive
  - monospace
  - fantasy

- Font
  - Times New Roman, Georgia (part of serif)
  - Helvetica, Verdana (part of sans-serif)
  - Brush Script, Mistral (part of cursive)
  - Courier New, Lucida Bright (part of monospace)

# How will the fonts be displayed?

- Default

  - Default behaviour simply means that we have not specified any kind of font family in our CSS code. Thus, the browser will simply choose the standard font that we apply and use font family that is selected in the browser.

- Generic Family

  - We can define a generic family in our css code. With that we could use another option where we could tell the browser to select a specific font family (based on selection from settings) for the specified generic family.

- Font family

  - We can specify font family in the css code. This way, we have three different options to tell browser where to retrive the specified font family from.
    - User's computer
    - Web fonts (Example - Google fonts) - Third Party
    - Retrived from server

# font-family

```CSS
body {
  font-family: "Montserrat", "Verdana", "sans-serif";
}
```

- Specifies a prioritized list of font family names or generic family names. A user agent iterates through the list of family names until it matches an available font that contains a glyph for the character to be rendered.
- Browser firt tries to apply `Montserrat`. If it is not able to find `Montserrat`, it will try to find `Verdana` and apply it. Lastly, if it not able to find `Verdana`, it will apply the default `sans-serif` (this is the fall-back strategy).

- Check if the font is present on different machines

  - [CSS Fonts Stack](https://www.cssfontstack.com/)

- To ensure that fonts are available to all the users using our website, we can use either options `web fonts` and `retrived from server`.

# font-weight

```CSS
body {
  font-family: "Montserrat", "Verdana", "sans-serif";
  font-weight: 100;
}
```

- The `font-weight` property can have values from 100 to 900, bold, bolder or inherit.

# font-style

```CSS
body {
  font-family: "Montserrat", "Verdana", "sans-serif";
  font-weight: 100;
  font-style: italic
}
```

- The `font-style` property can have values like italic, normal, oblique, inherit, initial, and unset.

# Different font properties

```CSS
element {
  font-size: 40px;
  font-variant: small-caps;
  font-stretch: ultra-condensed;
  letter-spacing: 10px;
  white-space: pre; /* normal, pre-line, nowrap */
  line-height: 2;
  text-decoration: underline /* overline line-through */ wavy /* dotted */ red /* color */;
  text-shadow: 3px 3px 7px lightgray;
}
```

# Font Shorthand property

```CSS
element {
  /* font-style: italic; */
  /* font-variant: small-caps; */
  /* font-weight: 700; */
  /* font-size: 1.25rem; */
  /* line-height: 2; */
  /* font-family: "AnonymousPro", "sans-serif"; */
  font: italic small-caps 700 1.25rem/2 "AnonymousPro", "sans-serif";
}
```

# Useful Resources and Links

- [Web Safe Fonts](https://www.cssfontstack.com/)
- [Google Fonts](https://fonts.google.com/)
- [The "line-height" property](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
