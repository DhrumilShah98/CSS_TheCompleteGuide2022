# There are 3 different ways of adding CSS.

### 1. Using INLINE styling

- This can be achieved by adding `style` attribute to a normal HTML tag.

  ```HTML
      <section style="background: red; color: black">
          <h1>Get the freedom you deserve.</h1>
      </section>
  ```

### 2. Using style tag inside the head tag of HTML

- This can be achieved by adding `<style></style>` tags inside the `<head></head>` tags.

  ```HTML
  <head>
      <style>
          section {
              background: #ff1b68;
              color: black;
          }
      </style>
  </head>
  <body>
      <main>
          <section>
              <h1>Get the freedom you deserve.</h1>
          </section>
      </main>
  </body>
  ```

### 3. Having all styles in a seperate .css file (Recommended way)

- This can be achieved by having a seperate file with file extension `.css` and by using a `link` tag to link that css file into the html file.

- File - main.css

  ```CSS
    section {
        background: #ff1b68;
        color: black;
    }
  ```

- File - index.html

  ```HTML
  <head>
    <link rel="stylsheet" href="main.css" />
  </head>
  <body>
      <main>
          <section>
              <h1>Get the freedom you deserve.</h1>
          </section>
      </main>
  </body>
  ```

# Fonts

- To use default fonts that browser supports (i.e., Chrome, Edge, Firefox, etc...), we can use css property called `font-family` and set it to either `sans-serif`, `serif`, `monospace`.

  ```CSS
    h1 {
        font-family: sans-serif;
    }
  ```

- To add custom fonts, we can use [Google Fonts](https://fonts.google.com/).

# Selectors (More about Selectors)

### 1. Elements

- Set equal style for elements. For example, if we want similar styling for `h1` tag, `p` tag, `div` tag, and all other tags, we can define/use elements styling.

  ```HTML
    <h1>Header</h1>
    <p>The Blog Post</p>
    <div>More Info</div>
  ```

  ```CSS
    h1 {
        color: red;
    }
  ```

### 2. Classes

- Set equal styles for elements within the same class.

  ```HTML
    <h1 class="blog-post">Header</h1>
    <p class="blog-post">The Blog Post</p>
    <div class="blog-post">More Info</div>
  ```

  ```CSS
    .blog-post {
        color: red;
    }
  ```

- Add multiple classes to a single tag.

  ```HTML
    <h1 class="class1 class2 class3">Header</h1>
  ```

### 3. Universal

- To style every element on the page.

  ```HTML
    <h1>Header</h1>
    <p class="blog-post">The Blog Post</p>
  ```

  ```CSS
    * {
        color: red;
    }
  ```

### 4. IDs

- Set style to one specific element.

  ```HTML
    <h1 id="main-title">Header</h1>
  ```

  ```CSS
    #main-title {
        color: red;
    }
  ```

### 5. Attributes

- Set equal styles to all elements with attribute(s)

  ```HTML
    <button disabled>
      Click
    </button>
  ```

  ```CSS
    [disabled] {
        color: red;
    }
  ```

# Specificity

- The concept of how styling is applied on a tag. Below is a list of styling specificity from highest to lowest. Highest always override the lowest.

  1. INLINE styling
  2. ID styling
  3. Class styling
  4. Element styling

- or

  1. INLINE styles
  2. #ID selectors
  3. .class, :psuedo-class and [attribute] selectors
  4. `<Tag>` and ::psuedo-element selectors

# Cascading

- CSS stands for Cascading Style Sheets and Cascading simply means multiple styles can be applied or multiple rules can be applied to the same element.

- CSS knows a concept called specificity and there are clear rules included in the CSS specification that define how such Cascading conflict can be resolved and which type of selector has a higher specificity.

# Inheritance

- Inheritance also means that an element also inherits some styles of the parent element.
- Example - We can define a global font in `body` tag and custom fonts in different styles like in `.class`, `#id`, `element`.

# Understanding Combinators

- Combinators allow us to be more clear about our rules and select elements by passing more information to the selector.

### 1. Adjacent Sibling

- Element share the same parent.
- Second element comes `IMMEDIATELY` after first element.

  ```CSS
    h2 + p {

    }
  ```

  ```HTML
    <div>
      <h2>Not Applied</h2>
      <p>CSS Applied</p>
      <h2>Not Applied</h2>
      <h3>Not Applied</h3>
      <p>Not Applied</p>
      <h2>Not Applied</h2>
      <p>CSS Applied</p>
    </div>
  ```

### 2. General Sibling

- Element share the same parent.
- Second element comes after first element.

  ```CSS
    h2 ~ p {

    }
  ```

  ```HTML
    <div>
      <h2>Not Applied</h2>
      <p>CSS Applied</p>
      <h2>Not Applied</h2>
      <h3>Not Applied</h3>
      <p>CSS Applied</p>
      <h2>Not Applied</h2>
      <p>CSS Applied</p>
    </div>
  ```

### 3. Child

- Second element is a direct child of first element.

  ```CSS
    div > p {
      color: red;
    }
  ```

  ```HTML
    <div>
      <div>Not Applied</div>
      <p>CSS Applied</p>
      <div>Not Applied</div>
      <article>
        <p>Not Applied</p>
      </article>
      <p>CSS Applied</p>
    </div>
  ```

### 4. Descendant

- Second element is a descendant of first element. (Direct or Indirect)

  ```CSS
    div p {
      color: red;
    }
  ```

  ```HTML
    <div>
      <div>Not Applied</div>
      <p>CSS Applied</p>
      <div>Not Applied</div>
      <article>
        <p>CSS Applied</p>
      </article>
      <p>CSS Applied</p>
    </div>
  ```

# Useful Resources & Links

1. [Complete MDN CSS Reference (don't learn this by heart!)](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
2. [Do you prefer reading? Find written CSS docs on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)
3. [Common CSS Properties Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference)
4. [CSS Combinators](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Combinators_and_multiple_selectors)
5. [More details on CSS Specifity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
