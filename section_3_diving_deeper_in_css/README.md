# Box Model

- Every element in HTML is interpreted as a box by CSS. We can see that box in Chrome developer tools if we inspect that element.
- Every element has 4 properties.
  1. `Content` - Blue box in Chrome developer tools. (Innermost)
  2. `Padding` - Green box in Chrome developer tools. (Surrounds the content)
  3. `Border` - Yellow box in Chrome developer tools. (Surrounds the padding)
  4. `Margin` - Brown box in Chrome developer tools. (Margin is not part of element)

### Fact - We can set the above values using a unit like pixel (px).

```CSS
#product-overview {
  background: #ff1b68;
  padding: 24px;
  margin: 8px;
  border: 2px solid black;
}

```

# Shorthand way of writing CSS styles.

- Normal way

  ```CSS
  #product-overview {
  background: #ff1b68;
  padding: 24px;
  margin: 8px;
  border-style: solid;
  border-width: 2px;
  border-color: black;
  }
  ```

- Shorthand way

  ```CSS
  #product-overview {
  background: #ff1b68;
  padding: 24px;
  margin: 8px;
  border: 2px solid black;
  }
  ```

# Margin Collapsing

- If we have two elements (i.e., two block elements) next to each other, then margin between them are actually collapsed to one margin. Also, the bigger margin wins. This is enforced by CSS to ensure that we don't get two big distances between the elements.
- In General - Use either `margin-top` or `margin-bottom`.

# Shorthand Properties

- Combine values of multiple properties in a single property (the shorthand property).

  ```CSS
  element {
  /* Border */
  /* Separate Properties */
  border-width: 2px;
  border-style: dashed;
  border-color: orange;

  /* Shorthand property */
  border: 2px dashed orange;

  /* Margin */
  /* Separate Properties */
  margin-top: 5px;
  margin-right: 10px;
  margin-bottom: 5px;
  margin-left: 10px;

  /* Shorthand property */
  margin: 5px 10px 5px 10px; /* top right bottom left */
  margin: 5px 10px; /* top & bottom | left & right */
  margin: 5px; /* All 4 sides */
  }
  ```

### Fact - Block level elements take the full available width by default.

- We can use % to set width and height.
- Example `width: 80%` (Take 80% of the available width given by the parent container or screen width).
- Example `height: 100%` (Take 100% of the available height given by the parent container).
- The width and height is only applied to the content part. However, the browser computes width and height by adding content, padding, and border. This may affect how the element is displayed on the screen. To fix this, we can use `box-sizing` property and change its value from `content-box` to `border-box`.

### Fact - We can change block level elements to inline and vice versa.

- To change the behaviour of an element from `block` or `inline` or even to `inline-block` or `none`.

# display: none vs visibility: hidden

- `display: none;` - this value removes the element to which we apply it from the document flow. This means that the element is not visible and it also doesn't "block its position". Other elements can (and will) take its place instead. There is an alternative to that though.
- If we only want to hide an element but we want to keep its place (i.e. other elements don't fill the empty spot), we can use `visibility: hidden;`

# HTML Refresher: Block-level vs Inline Elements

- Not really a CSS topic, though it's related to it: The difference between block-level and inline elements.
- Read a more detailed article (which also includes a YouTube video about HTML at the top of the page) [here](https://academind.com/learn/html/beginner-s-guide/diving-deeper-into-html#block-level-vs-inline-elements).

- Here's the executive summary:
  - Block-level elements are rendered as a block and hence take up all the available horizontal space. We can set `margin-top` and `margin-bottom` and two block-level elements will render in two different lines.
  - Some examples are: `<div>` , `<section>` , `<article>` , `<nav>` but also `<h1>` , `<h2>` etc and `<p>`.
  - Inline elements on the other hand only take up the space they require to fit their content in. Hence two inline-elements will fit into the same line (as long as the combined content doesn't take up the entire space in which case a line break would be added).
  - They also use the box-model we learned about but `margin-top` and `margin-bottom` have no effect on the element. `padding-top` and `padding-bottom` also have a different effect. They don't push the adjacent content away but they will do so with the element border. Read more about that behavior in the [following](https://hacks.mozilla.org/2015/03/understanding-inline-box-model/) article.
  - Additionally, setting a width or height on an inline element also has no effect. The width and height is auto to take as much space as required by the content.
  - Logically, this makes sense since we don't want your inline elements to destroy our multi-line text-layout. If you want to do so or need both block-level and inline behavior, we can set `display: inline-block` to merge behaviors.
  - Some example elements are: `<a>` , `<span>` , `<img>`.

# Psudeo

### Psudeo Class

- Psudeo class define a style or allow us to define a style for a `special state` of an element.
- Example: `hover`, `active`.
- Read more [here](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

- Syntax
  - :class_name

### Psudeo Element

- Defines the style of a `specific part` of an element.
- Example: `before`, `after`, `first-letter`
- Read more [here](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)

- Syntax
  - ::element_name

# Grouping Rules

From

```CSS
.main-nav__item--cta > a:hover{
  color: #ff1b68;
  background: white;
  border: none;
}

.main-nav__item--cta > a:active {
  color: #ff1b68;
  background: white;
  border: none;
}
```

To

```CSS
.main-nav__item--cta > a:hover,
.main-nav__item--cta > a:active {
  color: #ff1b68;
  background: white;
  border: none;
}
```

# Properties worth to remember

- color
- background-color
- display
- padding
- border
- margin
- width
- height

# Useful Resources & Links

- [CSS Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model)
- [box-sizing] https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
- [More on height & width](https://www.w3schools.com/css/css_dimension.asp)
- [The display Property](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
- [Pseudo Classes on the MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
- [Dive deeper into Pseudo Elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)
