# Background

- All about background

# background-image

- To add a background image.

```CSS
element {
    background-image: url('image');
}
```

# background-color

- To add a background color.

```CSS
element {
    background-color: red
}
```

# background-size and background-repeat

- To add a background size. We can use units like `px` and `%`. If size of the element containing the image is big than the size of the image, the image will be repeated multiple times. To avoid this, we can use a property called `background-repeat` and set it to `no-repeat`.

```CSS
element {
    background-image: url('image');
    background-size: 100px;
    background-repeat: no-repeat;
}
```

- We can also set the `height` along with the `width`.
- Syntax for that is

  - `background-size: width height`

- If we do not set the height, the height will be set to `auto` and it will ensure that the image's aspect ratio is maintained.

- We can also use predefined values for background-size such as
  - cover: Ensures no white space is there in containing element.
  - contain: Ensures that full image is visibile.

# background-position

- Syntax

  - `background-position: x-axis-value y-axis-value`

- `x-axis-value`: Position's the image from the left of the container. (Can be `px`, `%`, `center`, `top`, `left`, `bottom`, `right` )
- `y-axis-value`: Position's the image from the top of the container. (Can be `px`, `%`, `center`, `top`, `left`, `bottom`, `right` )

# background-origin

- From where the image should begin. It can have values like:
  - border-box
  - content-box
  - padding-box

# background-clip

- From where the image should be cliped. It can have values like:
  - border-box
  - content-box
  - padding-box

# The background property

- Shorthand property for all the other background. Summary of all the `background` shorthand properties

- background
  - background-image: Set one or more background images
  - background-color: Set a background color
  - background-position: Set initial position, relative to background position layer
  - background-size: Set size of background image
  - background-repeat: Defines how background images are repeated
  - background-origin: Set background position area
  - background-clip: Define whether background extends underneath border
  - background-attachment: Sets the scrolling behaviour of the background image

# Gradient

- All about gradients

# Linear Gradient

- Syntax:

```CSS
element {
  background-image: linear-gradient(red, blue);
}
```

- We can set linear gradient using built-in function linear-gradient(). If we don't specify any directional argument, by default, the gradient will be applied from top to bottom.

- To specify a direction we can provide first argument such as `to left bottom`, `to right bottom`, `to left top` etc... or we can also provide degrees like `30deg`, `90deg`. Default value is `180deg`.

- We can also specify percentage after color to tell how much should it occupy before starting the gradient effect. Example `background-image: linear-gradient(180deg, red 60%, blue)`

Learn more [here](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient).

# Radial Gradient

- Syntax:

```CSS
element {
  background-image: radial-gradient(red, blue);
}
```

Learn more [here](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient).

# Filter

- Example

```CSS
element {
  filter: blur(5px);
  filter: brightness(0.4);
  filter: contrast(200%);
  filter: drop-shadow(16px 16px 20px blue);
  filter: grayscale(50%);
  filter: hue-rotate(90deg);
  filter: invert(75%);
  filter: opacity(25%);
  filter: saturate(30%);
  filter: sepia(60%);

  /* Multiple filters */
  filter: contrast(175%) brightness(3%);
}
```

# Useful Links & Resources

- [The background Property](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
- [Styling Images](https://www.w3schools.com/css/css3_images.asp)
- [Filters](https://developer.mozilla.org/en-US/docs/Web/CSS/filter)
- [Styling SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/SVG_and_CSS)