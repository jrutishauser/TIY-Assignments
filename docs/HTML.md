### 1. '<hr>' -- horizontal rule (dividing line)

* *type:* block-level
* *content:* none, empty element
* *support:* all browsers
* *example:*
```
<p>some text</p>
<hr>
<p>text down under</p>
```
<p>some text</p>
<hr>
<p>text down under</p>

### 2. '<table>' -- HTML Table element represents data in 2 dimensions or more

* *type:* block-level
* *content:* Flow Content[1]
* *support:* all browsers
* *example:*
```
<table>
<tr>
<td>top left</td>
<td>top right</td>
</tr>
<tr>
<td>bottom left</td>
<td>bottom right</td>
</tr>
</table>
```
<table>
<tr>
<td>top left</td>
<td>top right</td>
</tr>
<tr>
<td>bottom left</td>
<td>bottom right</td>
</tr>
</table>

### 3. '<pre>' -- Preformatted Text, observes whitespace

* *type:* block-level
* *content:* phrasing content[2]
* *support:* all browsers
* *example:*
```
<pre>
derp      space
s p a c e d
</pre>
```
<pre>
derp      space
s p a c e d
</pre>

### 4. '<dl>' -- Description list element

* *type:* block-level
* *content:* Flow content[1]
* *support:* all browsers
* *example:*
```
<dl>
<dt>Jon</dt>
<dd>Some guy that signed up for the iron yard</dd>
</dl>
```
<dl>
<dt>Jon</dt>
<dd>Some guy that signed up for the iron yard</dd>
</dl>

### 5. '<footer>' -- footer for its nearest section content

* *type:* block-level
* *content:* Flow content[1], no footer or header descendents
* *support:* all browsers
* *example:*
```
<footer>some copyright stuff generally ignored</footer>
```
<footer>some copyright stuff generally ignored</footer>

### 6. '<div>' -- Generic container for flow content

* *type:* block-level
* *content:* Flow content[1]
* *support:* all browsers
* *example:*
```
<div>
<h1>content?</h1>
<p>any content in these things!</p>
<p>even, our table from before!?!?!?</p>
<br>
<table>
<tr>
<td>top left</td>
<td>top right</td>
</tr>
<tr>
<td>bottom left</td>
<td>bottom right</td>
</tr>
</table>
<br>
<p>OMG no wayyyyyy</p>
</div>
```
<div>
<h1>content?</h1>
<p>any content in these things!</p>
<p>even, our table from before!?!?!?</p>
<br>
<table>
<tr>
<td>top left</td>
<td>top right</td>
</tr>
<tr>
<td>bottom left</td>
<td>bottom right</td>
</tr>
</table>
<br>
<p>OMG no wayyyyyy</p>
</div>
