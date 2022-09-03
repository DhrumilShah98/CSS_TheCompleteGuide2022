# Advanced Attribute Selectors

1. Element with Attribute

   ```HTML
   <input type="text" />
   ```

   ```CSS
   [type] {
       color: red;
   }
   ```

2. Element with Specific Attribute Value

   ```HTML
   <input type="email" />
   ```

   ```CSS
   [type="email"] {
       color: red;
   }
   ```

3. Element with Specific Attribute Value in List

   ```HTML
   <p lang="en-us en-gb">Hi!</p>
   ```

   ```CSS
   [lang~="en-us"] {
       color: red;
   }
   ```

4. Element with Specific Attribute Value/Value-

   ```HTML
   <p lang="en-us">Hi!</p>
   ```

   ```CSS
   [lang|="en"] {
       color: red;
   }
   ```

5. Element with Specific Attribute Value Prefix

   ```HTML
   <a href="#all">Link</a>
   ```

   ```CSS
   [href^="#"] {
       color: red;
   }
   ```

6. Element with Specific Attribute Value Suffix

   ```HTML
   <a href="ab.de">Link</a>
   ```

   ```CSS
   [href$=".de"] {
       color: red;
   }
   ```

7. Element with At Least One Attribute Value

   ```HTML
   <img src="i.cdn.com">
   ```

   ```CSS
   [src*="cdn"] {
       color: red;
   }
   ```

8. Check Values Case-Insensitively

   ```HTML
   <img src="i.CDN.com">
   ```

   ```CSS
   [src*="cdn" i] {
       color: red;
   }
   ```

# Useful Resources & Links

- [Styling Form Elements](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Styling_HTML_forms)
- [Styling a `<select>` Element](https://stackoverflow.com/questions/1895476/how-to-style-a-select-dropdown-with-css-only-without-javascript)
