# Positioning Elements

- By default, all the elements have a `position` property applied to it. The default value of this `position` property is `static`. This ensures that elements follow document flow.

- To change the position of any element from the normal document flow, we can use `position` property with values like `absolute`, `relative`, `fixed`, or `sticky`. Along with that, we can use properties like `top`, `bottom`, `left`, and `right`.

- The values `top`, `bottom`, `left`, and `right` won't work if we have `position` with value `static`.

### Note - A viewport simply means visible part/area of our web page. We could translate it with "our browser window".

## position: fixed

- By applying `position` property with value `fixed`, we can take it out of our normal document flow. This simply means that for all the other elements, that element (i.e., element with `position` property with `fixed` value) does not exist. Also, the element will now behave as `inline-block` element.

- The `position` property can be applied on either type of elements (i.e., block-level elements or inline elements). It doesn't matter.

## z-index property

- `z-index` allows us to stack elements on top of one another. Using `z-index` property along with `position` property, we can align multiple elements on one another. By default, every element has `z-index` set to value `auto`. `z-index` can have negative, positive, and zero values. Positive value brings the element more on top while negative elements pushes the element back.

- `z-index` has no effect when `position` property is not applied.

- With `z-index`, order matters. If two elements have same `z-index`, the one that comes later is displayed above

## position: absolute

- For an element with `position` set to `absolute`, the positioning context of the element is simply the HTML element. If we have any `position` ancestor, then the closest ancestor with `position` property is the context for the element.

- What we do generally is to move an element inside the parent element, we set the `position` of parent element to `relative` and `position` of child element to `absolute`.

## Facts

- For `position`: `fixed`, the positioning context is the viewport while for `position`: `absolute`, the positioning context depends on ancestors if they have `position` property applied otherwise the viewport.

## position: relative

- Allows us to `position` the element from it's current position.
- Example

```CSS
element {
    position: relative,
    top: 50px,
    left: 50px
}
```

- The above CSS styling will move the element 50 pixels from the top and 50 pixels from the left from the current position.

## position property quiz

- Both `absolute` and `fixed` value take the element this value is applied to out of the document flow.
- Applying the `fixed` value to an element will change the positioning context to the viewport. Therefore, this is a really nice approach to easily create a fixed navigation bar.
- Adding the `position` property with a value different from `static` to a parent element will change the child's positioning context if the child has a `position` value of `absolute`.
- Adding the `position` property is step 1, but then we also have to add a value different from `static` to be able to move our elements away from its initial position.

## overflow property

- `position`:`relative` allows us to position the element from its current position. Also, it allows us to move the element out from the parent element. To avoid this behaviour, we can simply go to our parent element and add property `overflow`:`hidden`. This will hide the element when it is outside of the parent.

- NOTE: When we apply `overflow`:`hidden` to body element, the default behaviour of CSS will move that to the html element. We cannot change this behaviour. To override this behaviour, we have to apply `overflow`:`hidden` to both (i.e., html and body).

# position: sticky

- A hybrid combination of `relative` and `fixed`. It works along side with properties like `top`, `bottom`, `left`, and `right`.
- Keeps elements position as `fixed` or `relative` depending on how it appears in the viewport. As a result, the element is "stuck" when necessary while scrolling.
- This is a new property and still has no proper browser support.

# Stacking Context

- Child elements are always part of the stacking context of their parent.
- Assume that we have two elements at same level and the first element has one child element inside it as below.

```HTML
<div class="first">
    <div class="first__child-1"></div>
</div>
<div class="second">
</div>
```

- If the first element has `z-index` of 1 and the second element has `z-index` of 10, then the second element will be displayed on top of the first element. Now, if the first child has `z-index` of 100, then even it has a higher value then second element's `z-index`, it will still be displayed below the first element. This is because of stacking context.

# Useful Resouces & Links

- [Positioning theory](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning)
- [More about the "position" property](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [The z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
- [The Stacking Context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)
- [The "sticky" value and current browser support](https://caniuse.com/#search=sticky)
