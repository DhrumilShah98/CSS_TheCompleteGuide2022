# CSS Transforms

- We can transform elements on three axis. (X-axis, Y-axis, and Z-axis).
- We can transform elements for some 3D effects or just to have some different placement of elements.
- We can apply transformation to the parent element and it also affects the child elements.

# transform Property

- The CSS property to tranform an element is `transform`.

- Syntax

```CSS
element {
  transform: rotateX(45deg);
  transform: rotateY(45deg);
  transform: rotateZ(45deg);
  transform: skewX(20deg) skewY(20deg); /** skew(20deg, 20deg) */
  transform: skew(20deg, 20deg) scaleX(2) scaleY(2); /** scale(2, 2) */
  /** Many more */
}
```

# tranform-origin Property

- To keep the origin (or to change the origin), we use property `transform-origin`. The default value is `center`.

- Syntax

```CSS
element {
  transform: rotateZ(45deg);
  transform-origin: top left;
}
```

# translate value of tranform Property

- To translate (move) the element in X, Y, Z, 3D ways.

- Syntax

```CSS
element {
  transform: rotateZ(45deg) translateX(3.5rem) translateY(-1rem); /** translate(3.5rem, -1rem) */
  transform-origin: center;
}
```

# 3D Transformation and perspective

```CSS
parent_container {
  perspective: 100px; /** Applied to all the child elements */
}

element1 {
  transform: perspective(100px); /** Applied only to this element */
}

element2 {
  transform: perspective(100px); /** Applied only to this element */
}
```

# Summary

- The `tranform` property

  - Allows you to `translate()`, `scale()`, `rotate()`, and `skew()` elements.
  - 3D transformations are possible via the Z-axis.
  - `tranform-origin` and `tranform-style` for customization.

- Perspective
  - `perspective` allows you to define the perspective of the viewer.
  - perspective-origin allows you to manipulate the origin of the viewer.

# Useful Resources & Links

- [CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
- [3D Transforms](https://desandro.github.io/3dtransforms/)
