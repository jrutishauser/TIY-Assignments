### 1. `max-width`

* elements: all
* inherited: no

#### Values

* `none` No max width, this is the default
* `length` defines max width in px, cm, etc..
* `%` defines max width in percent of containing block
* `initial` sets this property to max value
* `inherit` inherits this property from parent elemnt

### 2. `position`

* elements: all
* inherited: no

#### Values

* `static` Default value. Elements render in order
* `absolute` element is positioned relativeto first positioned (not static) element
* `fixed` element positioned relative to browser window
* `relative` The element is positioned relative to its normal position
* `inherit` inherits this property from its parent element

### 3. `float`

* elements: all
* inherited: no

#### Values

* `none` element is not floated and will be displayed where it is in text. default
* `left` the element floats to the left
* `initial` sets the property to its default value
* `inherit` inherits this property from its parent

### 4. `clear`

* elements: all
* inherited: yes

#### Values

* `none` default, allows floating elements on both sides
* `left` no floating elements allowed on left side
* `right` no floating elemenets allowed on right side
* `both` no floating elements allowed on either the right or left side
* `initial` sets this property to its default value
* `inherit` inherits this property from its parent element

### 5. `margin`

* elements: all
* inherited: no

#### Values

* `length` Specifies a margin in px, pt, cm, etc.. default is 0
* `%` spedifies a margin in percent width of the containing element
* `auto` the browser calculates margin
* `initial` sets this property to its default value
* `inherit` inherits this property from its parent element

### 6. `box-sizing`

* elements: all
* inherited: no

#### Values

* `content-box` Default. The width and height properties and min and max includes only the content.  border, padding, margin not included
* `border-box` width and height properties and min and max properties includes content padding and border but not margin
* `initial` sets this property to its default value
* `inherit` inherits this property from its parent element

### 7. `padding`

* elements: all
* inherited: no

#### Values

* `length` specifies the padding in px, pt, cm, etc. default is 0
* `%` specifies the padding in percent of the width of the containing element
* `initial` sets this property to its default value
* `inherit` inherits this property from the parent element

### 8. `border`

* elements: all
* inherited: no

#### Values

* `border width` specifies the width of the border. default value is medium
* `border style` specifies the style of the border. default is none
* `border color` specifies the color of the border. default is color of element
* `initial` sets this property to its default value
* `inherit` inherits this property from its parent element

### 9. `column`

* elements: all 
* inhreited: no

#### Values

* `auto` default value, sets both the column-width to auto and the column-count to auto
* `column-width` the width of the columns
* `column-count` the number of columns
* `initial` sets this property to its default value
* `inherit` inherits this property from its parent element

### 10. `color`

* elements: text
* inherited: yes

#### Values

* `color` specifies the text color
* `initial` sets this property to its default
* `inherit` inherits this property from its parent

### 11. `background-image`

* elements: divs and body?
* inherited: no

#### Values

* `URL` the URL to the image. to specify more than one separate the the URLs with a comma
* `none` No background image shown (default)
* `initial` sets this property to its default value
* `inherit` inherits this property from its parent

### 12. `font-family`

* elements: any text element
* inherited: yes

#### Values

* `family-name, generic-family` A prioritized list of font family names and/or generic family names
* `initial` Sets this property to its default value
* `inherit` Inherits this property from its parent element

### 13. `font-size`

* elements: any text
* inherited: yes

#### Values

* `medium` sets the font to a medium size.  default
* `xx-small x-small small large x-large xx-large` c'mon man p-obvious
* `smaller larger` sets font to a smaller or larger size then its parent size
* `length` sets the font to a fixed size in px, cm, etc..
* `%` sets the font size to a percent of the parents element
* `initial` sets to default
* `inherit` inherits this property from parent

### 14. `text-align`

* elements: text and images
* inherited: yes

#### Values

* `left` Aligns text to the left
* `right` Aligns text to the right
* `center` David, you wont believe it but.... centers it
* `justify` stretches the lines so that each line has an equal width
* `initial` sets this property to its default value
* `inherit` inherits this property from the parent element

### 15. `box-shadow`

* elements: box element
* inherited: no

#### Values

* `none` default value, none
* `h-shadow` required. position of horizontal shadow. negative allowed
* `v-shadow` required. position of veritcal shadow. neg allowed
* `blur` optional the blur distance
* `spread` optional, size of shadow
* `color` optional the color of the shadow
* `inset` optional. changeds the shadow from an outer shadow to an inner shadow
* `initial` sets to default
* `inherit` inherits this property from its parent

### 16. `overflow`

* elements: box element
* inherited: no

#### Values

* `visible` the overflow is not clipped. renders outside the elements box
* `hidden` the overflow is clipped, and the rest of the content will be invisible
* `scroll` the overflow is clipped, but a scroll-bar is added to see the rest of the content
* `auto` if overflow is clipped a scroll-bar should be added to see the rest
* `initial` sets to default
* `inherit` inherits this property from its parent