# CSS Transitions

- To animate CSS properties, we can use the `transition` property. It allows us to move properties and animate them.

- Syntax

  ```CSS
  element {
      /** transition: property animate-time timing-function animate-delay; */
      transition: opacity 200ms ease-out 1s, transform 500ms ease-out 1s;
  }
  ```

- Can be translated to: "Animate any changes in the opacity property (for the element to which the transition property is applied) over a duration of 200ms. Start fast and end slow, also make sure to wait 1s before you start".

- Instead of this shorthand, we can also specify the four individual properties:

1. [transition-property](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property) => `transition-property: opacity;`

2. [transition-duration](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration) => `transition-duration: 200ms;`

3. [transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function) => `transition-timing-function: ease-out;`

- Possible timing function values are: ease-out , ease-in , linear , cubic-bezier() and a couple of others.

4. [transition-delay](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay) => `transition-delay: 1s;`

- Read the official MDN article on CSS transitions here: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions

# CSS Animations

- Syntax

- animation: NAME DURATION DELAY TIMING-FUNCTION ITERATION DIRECTION FILL-MODE PLAY-STATE;

- Example:

  ```CSS
  animation: wiggle 200ms 1s ease-out 8 alternate forwards running;
  ```

- Can be translated to: "Play the wiggle keyframe set (animation) over a duration of 200ms. Between two keyframes start fast and end slow, also make sure to wait 1s before we start. Play 8 animations and alternate after each animation. Once you're done, keep the final value applied to the element. Oh, and we should be playing the animation - not pausing."

- Instead of this shorthand, we can also specify the individual properties:

1. [animation-name](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name => `animation-name: wiggle;`

2. [animation-duration](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration) => `animation-duration: 200ms;`

3. [animation-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function) => `animation-timing-function: ease-out;`

   - Possible timing function values are: ease-out , ease-in , linear , cubic-bezier() and a couple of others. See the above link for more details.

4. [animation-delay](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay) => `animation-delay: 1s;`

5. [animation-iteration-count](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count) => `animation-iteration-count: 8;`

6. [animation-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction) => `animation-direction: alternate;`

7. [animation-fill-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode) => `animation-fill-mode: forwards;`

8. [animation-play-state](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state) => `animation-play-state: running;`

Read the official MDN article on CSS animations [here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations).

# Simple Animation Example

```CSS
.main-nav__item--cta {
  animation: wiggle 400ms 3s 8 ease-out none;
}

@keyframes wiggle {
  /* from {
    transform: rotateZ(0);
  }
  to {
    transform: rotateZ(10deg);
  } */

  /* OR */

  0% {
    transform: rotateZ(0);
  }
  50% {
    transform: rotateZ(-10deg);
  }
  100% {
    transform: rotateZ(10deg);
  }
}
```

# Summary

- Keyframes

  - Define all animation steps on our own: Via `from` and `to` or `%` values.
  - Animate as many properties as we want.
  - Animate different properties in each keyframe step.
  - Timing function interpolates transition between keyframes.

- The `animation` property
  - Define which keyframe set should be played.
  - Set a duration and delay (if wanted).
  - Define how many iterations should be played and if the animation should alternate or not.
  - Set the `animation-fill-mode` to decide whether the properties of the last keyframe should be kept.
  - Listen to animation events via JavaScript.

# Useful Resources & Links

- [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- [List of "transitionable" Properties](https://www.w3.org/TR/css-transitions-1/#animatable-properties)
