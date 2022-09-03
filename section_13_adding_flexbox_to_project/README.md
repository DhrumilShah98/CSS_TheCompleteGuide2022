# Flexbox

- The modern way to change the way our elements are displayed.

# Understanding Flexbox

- With the property `display: flex`, we create a parent that is a flex container.
- All childrens are flex items.
- For the parent, we can apply properties like `flex-flow`, `justify-content`, `align-content`, and `align-items`.
- For the children, we can apply properties like `order`, `flex`, and `align-self`.

- Applying `display: flex`, we apply 2 more properties to it. These are:

  1. `flex-direction: row`
  2. `flex-wrap: nowrap`

- The main axis and cross axis always have the same starting point.

  1. The main axis goes from left to right and cross axis goes from top to bottom for `flex-direction: row`.
  2. The main axis goes from right to left and cross axis goes from top to bottom for `flex-direction: row-reverse`.
  3. The main axis goes from top to bottom and cross axis goes from left to right for `flex-direction: column`.
  4. The main axis goes from bottom to top and cross axis goes from left to right for `flex-direction: column-reverse`.

- The `align-items` property align all items on cross axis while the `justify-content` property align all items on main axis.

- The `align-content` property is combination of `align-items` and `justify-content`.

# Summary for Flexbox - Parent Container

- Different properties available are:
  1. `display: flex`
  2. `flex-direction: row`
  3. `flex-wrap: nowrap`
  4. `align-items: center`
  5. `justify-content: center`
  6. `align-content: center`

# Notes

- Creating a flex-container allows us to easily control the behaviour of the elements inside this container (the flex-items). Although this can also be helpful to create a responsive design, it mainly ensures that our elements are positioned in a more dynamic, flexible way.

- The main axis is always specified by "flex-direction" and depending on the value applied to this property the direction and the position of both the main and the cross axis is defined.

- Adding "display: flex" will turn the element into a flex-container with "flex-direction: row" (so the flex-items will be displayed along the main axis from left to right) and flex-wrap: nowrap, so the elements will not be wrapped into an additional line in case the viewport becomes to small.​

# Flexbox and the Z-Index

- In the position module we learned that adding the z-index to an element only has an effect, if the position property with a value different from static was applied to this element.

- One exception from this behaviour is flexbox: Applying the z-index to flex-items (so the elements inside of the flex-container) will change the order of these items even if no position property was applied.

- You will need the z-index for flex-items in the following assignment, so keep that special behaviour in mind.

# order property

- Items in a flex container can have `order` property. The default value for `order` is 0. The value can be negative also.
- Lower `order` value makes the item display first in the list.

# align-self

- Allows the default alignment along the cross axis to be overridden for individual flex items.

# flex-grow and flex-shrink

- Allow items to grow and shrink

# flex-basis

- flex-basis override `width` and `height` when set to a value (e.g. `flex-basis: 300px`). If `flex-direction: row`, then width is overridden and if `flex-direction: column`, height is overriden. If `flex-basis` is set to `auto`, it uses the value set for `width` and `height`.

# Summary for Flexbox - Children/Items

- Different properties available are:
  1. `order: 1`
  2. `align-self: flex-start`
  3. `flex-grow: 1`
  4. `flex-shrink: 1`
  5. `flex-basis: `

# Useful resources and links

- [Flexbox and browser compatibility](https://caniuse.com/#search=flexbox)
- [The theory behind flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [The flex container](https://developer.mozilla.org/en-US/docs/Glossary/Flex_Container)
