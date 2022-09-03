# What is 'CSS Grid'?

- CSS Grid allows us to define rows and columns and then to specify which elements should be positioned where.

# `display: grid` property

```HTML
<div class="container">
    <div class="el1">Element 1</div>
    <div class="el2">Element 2</div>
    <div class="el3">Element 3</div>
    <div class="el4">Element 4</div>
</div>
```

```CSS
.container {
    margin: 20px;
    display: grid;
}
```

# `grid-template-columns` property

- This property allows us to specify multiple columns.

```CSS
.container {
    margin: 20px;
    display: grid;
    grid-template-columns: 200px 150px 20% 1fr;
}
```

- The above CSS code snippet indicates that the grid container will have
  - 1st element occupy 200px.
  - 2nd element occupy 150px.
  - 3rd element occupy 20%.
  - 4th element occupy 1fr (Complete remaining space)

# `grid-template-rows` property

- This property allows us to specify multiple rows.

```CSS
.container {
    margin: 20px;
    display: grid;
    grid-template-columns: 200px 5rem 20% auto;
    grid-template-rows: 5rem auto;
}
```

# Override default positioning

- To override default positioning of elements inside grid container, we can specify properties like
  - `grid-column-start`
  - `grid-column-end`
  - `grid-row-start`
  - `grid-row-end`

```CSS
.container {
    margin: 20px;
    display: grid;
    grid-template-columns: 200px 150px 20% 1fr;
    grid-template-rows: 5rem 2.5rem;
}

.el3 {
    background: rgba(0, 128, 0, 0.5);
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
}
```

# repeat() function

```CSS
.container {
    margin: 20px;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 5rem 2.5rem;
}

```

- repeat function repeats the second argument (i.e., 25%) first argument (i.e., 4) times.

# minmax() function

- minmax function ensures that a certain cell should have a min width or height but should not become than a certain maximum.

# Elements can overlap

- Elements can overlap. They can occupy the same cell if we set them explicitly.

# A gooood Grid example

```HTML
<div class="container">
    <div class="el1">Element 1</div>
    <div class="el2">Element 2</div>
    <div class="el3">Element 3</div>
    <div class="el4">Element 4</div>
</div>
```

```CSS
.container {
    margin: 20px;
    height: 500px;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows:
        [row-1-start] 5rem
        [row-1-end row-2-start] minmax(10px, auto)
        [row-2-end row-3-start] 100px
        [row-3-end];
}

.el1 {
    background: rgba(255, 154, 72, 0.5);
}

.el2 {
    background: rgba(255, 0, 0, 0.5);
    grid-column-start: 1;
    grid-column-end: -1;
    grid-row-start: row-2-start;
    grid-row-end: span 1;
    z-index: 10;
}

.el3 {
    background: rgba(0, 128, 0, 0.5);
    grid-column-start: 2;
    grid-column-end: span 3;
    grid-row-start: row-1-start;
    grid-row-end: row-2-end;
}

.el4 {
    background: rgba(0, 4, 255, 0.5);
}
```

# `grid-column` and `grid-row` shorthand property

- `grid-column` shorthand property basically allows us to specify `grid-column-start` and `grid-column-end`.
- `grid-row` shorthand property basically allows us to specify `grid-row-start` and `grid-row-end`.

# `grid-area` shorthand property

- `grid-area` shorthand property basically allows us to specify all 4 properties.

Syntax

```
    grid-area: grid-row-start / grid-column-start / grid-row-end / grid-column-end
```

# `row-gap` and `column-gap` allows us to define gaps.

```CSS
.container {
    margin: 20px;
    height: 500px;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows:
        [row-1-start] 5rem
        [row-1-end row-2-start] minmax(10px, auto)
        [row-2-end row-3-start] 100px
        [row-3-end];
    column-gap: 1rem;
    row-gap: 1rem;
}
```

- Shorthand is `gap`

Syntax

```
gap: row-gap column-gap;
```

# Advanced Grid Layout

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>CSS Course</title>
    <link rel="stylesheet" href="main.css" />
  </head>
  <body>
    <div class="container">
      <div class="el1">Element 1</div>
      <div class="el2">Element 2</div>
      <div class="el3">Element 3</div>
      <div class="el4">Element 4</div>
    </div>
  </body>
</html>
```

```CSS
.container {
    margin: 20px;
    height: 500px;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows:
        [row-1-start] 5rem
        [row-1-end row-2-start] minmax(10px, auto)
        [row-2-end row-3-start] 100px
        [row-3-end];

    /*
    column-gap: 1rem;
    row-gap: 1rem;
    */

    /*
    gap: 1rem 1rem;
    */

    gap: 1rem;

    grid-template-areas:
        "header header header header"
        "side main main main"
        "footer footer footer footer";
}

.el1 {
    background: rgba(255, 154, 72, 0.5);
    grid-area: header;
}

.el2 {
    background: rgba(255, 0, 0, 0.5);
    /*
    grid-column-start: 1;
    grid-column-end: -1;
    grid-row-start: row-2-start;
    grid-row-end: span 1;
    */

    /*
    grid-column: 1 / -1;
    grid-row: row-2-start / span 1;
    */

    grid-area: row-2-start / 1 / span 1 / -1;
    z-index: 10;
    grid-area: side;
}

.el3 {
    background: rgba(0, 128, 0, 0.5);

    /*
    grid-column-start: 2;
    grid-column-end: span 3;
    grid-row-start: row-1-start;
    grid-row-end: row-2-end;
    */

    grid-area: main;
}

.el4 {
    background: rgba(0, 4, 255, 0.5);
    grid-area: footer;
}

```

# Positioning Grid Elements

- To position elements in Grid, we can use two properties
  1. justify-items (Default value is stretch)
  2. align-items (Default value is stretch)

# Positioning Grid iteself

- To position the Grid, we can use two properties
  1. justify-content
  2. align-content

# Summary

- Creating a Grid

  - `display: grid` - Creates a grid where child elements are automatically placed in rows.
  - This default can be overwritten with `grid-auto-flow` (and then also `grid-auto-rows` or `grid-auto-columns`).
  - Use `grid-gap` to add gaps between columns and rows.

- Defining the Grid Structure

  - You define columns and/or rows explicitly via `grid-template-columns`/`grid-template-rows`.
  - Use `repeat(times, size)` to create multiple columns or rows with ease.
  - Use `auto-fill`/`auto-fit` to derive the number of columns automatically.
  - Use `minmax` for dynamic sizing.

- Placing elements

  - Position elements in the grid via `grid-row` and/or `grid-column`.
  - Use span X to span an element over multiple columns or rows.
  - Use line numbers, line names or named areas.

- Aligning Elements
  - Align grid items via `justify-items` (X-axis) and `align-items` (Y-axis).
  - Align grid via `justify-content` (X-axis) and `align-content` (Y-axis).

# Useful resources and links

- [A really great article series on the CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [A complete guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
