# Making Website Responsive

- Conversions

| unit | name                | equivalence         |
| ---- | ------------------- | ------------------- |
| cm   | centimeters         | 1cm = 96px/2.54     |
| mm   | millimeters         | 1mm = 1/10th of 1cm |
| Q    | quarter-millimeters | 1cm = 1/40th of 1cm |
| in   | inches              | 1in = 2.54cm = 96px |
| pc   | picas               | 1pc = 1/6th of 1in  |
| pt   | points              | 1pt = 1/72th of 1in |
| px   | pixels              | 1px = 1/96th of 1in |

# Hardware Pixels vs Software Pixels

- [mydevice.io](https://www.mydevice.io/)

- Software Pixel = Hardware Pixel / Device Pixel Ratio

- A hardware pixel is an individual dot of light in the display. A software pixel, also called a CSS pixel in the web world, is a unit of measurement. The device manufacturer determines how many hardware pixels equals one software pixel, a concept known as the device pixel ratio. With Apple’s Retina display, a single CSS pixel contained four hardware pixels (2 pixels wide and 2 pixels tall), meaning that the device pixel ratio is 2. The Samsung Galaxy S4 pushed it a step further by introducing a device pixel ratio of 3, meaning each CSS pixel contains 9 hardware pixels. The LG G3 was the first with a ratio of four, and now the Galaxy S6 is following suit.

- To make it mobile friendly, we add this tag

```HTML
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=yes, maximum-scale=2.0, minimum-scale=1.0"
    />
```

# Viewport vs Media Queries

| Viewport                       | Media Queries                   |
| ------------------------------ | ------------------------------- |
| Adjust site to device viewport | Change design depending on size |
| No design changes              | Design changes defined by us    |

# Media Queries

```CSS
/* The below media query will kick in when the screen size >= 40rem */
/* The way we read the media query is by saying like if the following conditions are true, execute the media query */
/* Example - If the min-width is equal or greater than 40rem, execute the below code (i.e., apply the css) */
@media (min-width: 40rem) {
    /* CSS Code */
}

/* The below media query will kick in when the screen size <= 40rem */
/* The way we read the media query is by saying like if the following conditions are true, execute the media query */
/* Example - If the min-width is equal or greater than 40rem, execute the below code (i.e., apply the css) */
@media (max-width: 40rem) {
    /* CSS Code */
}
```

# Mobile First Approach

- In mobile first approach we start by designing the website that looks perfect on mobile devices. Then, we add media queries with `min-width` to scale it for desktops.

# Desktop first apprach

- In desktop first apprach we start by designing the website that looks perfect on desktops. Then, we add media queries with `max-width` to scale it for mobile devices.

# Media Queries best practices

- Always add media queries at the bottom of the CSS file. This way other developers can easily find all the media queries and change them if needed.

# Some Media Queries Syntax

```CSS
@media (min-width: 30rem) {}
@media (max-width: 30rem) {}
@media (min-width: 30rem) and (min-height: 50rem) {}
@media (max-width: 30rem) and (orientation: landscape){}
@media (max-width: 30rem) and (orientation: portrait){}
```

# Useful resources and links

[Absolute lengths on W3.org](https://www.w3.org/TR/css-values-3/#absolute-lengths)
[More about device sizes](https://bjango.com/articles/min-device-pixel-ratio/)
[Media queries theory](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)
[Applying media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
