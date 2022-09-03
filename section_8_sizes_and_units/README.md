# Units

- pixels (px)
- percentages (%)
- root em (rem)
- em (em)
- viewport height (vh)
- viewport width (vw)

# Properties were unit matters

- font-size
- padding
- border
- margin
- width
- height
- top
- bottom
- left
- right

# Rules to remember - Fixed Positioning & '%'

- If we have a container with `position: fixed` applied to it and has a size of `100px` and if we have a child element inside the container element with a width of `10%`, then it basically acquires `10px`. However, if there is no containing element, size will be `10%` of the viewport.

# Rules to remember - Absolute Positioning & '%'

- If we have a container with `position: absolute` applied to it and if we have a child element inside the container element, we will take the width of the parent's content and padding. This works for parent with all position values except `static`.

# Rules to remember - Static vs Relative Positioning & '%'

- If we have a container with either `static` or `relative` positioning, and if we have a child element inside the container element, the child element will take the width of the parent's content. Block level container.

# Backdrop using HTML and CSS

```HTML
<body>
    <div class="backdrop"></div>
    <!-- REST HTML CODE-->
</body>
```

```CSS
.backdrop {
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
}
```

# Understanding em and rem

- em: ephemeral unit
- rem: root ephemeral unit

- rem: Multiply the root px value with the specified em value. (i.e., If root value is 16px, and the value of rem is 1.1, we get 1.1rem \* 16px = 17.6px)

# Learning vw and vh

- vw and vh does not care what position we have applied. It simply refers to the screen's width and height.


# Which unit should I choose?

font-size (root element) | %, rem
font-size (general) | rem (em -> Children only)
padding | rem
border | px
margin | rem
width | %, vw
height | %, vh
top | %
bottom | %
left | %
right | %

# Useful Resources & Links

- [Font size properties and values](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)
- [Viewport units and browser support](https://caniuse.com/#search=vh)