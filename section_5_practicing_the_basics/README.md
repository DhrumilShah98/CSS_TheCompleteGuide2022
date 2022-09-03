# Importing Multiple Stylesheets

```HTML
<head>
    <link rel="stylesheet" href="shared.css" />
    <link rel="stylesheet" href="main.css" />
<head>
```

- The above code ensures that we first import styles from file `shared.css` file and then `main.css` file. This way, if we have some CSS that we want to overwrite, we can do so in `main.css` file. The reason for this is that `shared.css` is parsed first and `main.css` is parsed later.

# float

- `float` allows us to overwrite default positioning and tells the browser to push an element to either left or right of page.

- To clear `float`, we'll use property called `clear` with value either left, right, or both.

# Useful Resources & Links

- [More on float](https://developer.mozilla.org/en-US/docs/Web/CSS/float)