### 1. `<hr>` -- horizontal rule (dividing line)

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

### 2. `<table>` -- HTML Table element represents data in 2 dimensions or more

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

### 3. `<pre>` -- Preformatted Text, observes whitespace

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

### 4. `<dl>` -- Description list element

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

### 5. `<footer>` -- footer for its nearest section content

* *type:* block-level
* *content:* Flow content[1], no footer or header descendents
* *support:* all browsers
* *example:*
```
<footer>some copyright stuff generally ignored</footer>
```
<footer>some copyright stuff generally ignored</footer>

### 6. `<div>` -- Generic container for flow content

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

### 7. `<address>` -- supply contact info for nearest article

* *type:* block-level
* *content:* Flow content[1]
* *support:* all browsers
* *example:*
```
<address>
visit me at:<br>
123 derp street<br>
orlando, FL 32828</br>
</address>
```
<address>
visit me at:<br>
123 derp street<br>
orlando, FL 32828</br>
</address>

### 8. `<noscript>` -- section of HTML to be inserted if script type is unsupported or disabled

* *type:* block-level
* *content:* Flow content[1] phrasing content[2] metadata content [3]
* *support:* all browsers
* *example:*
```
<noscript>
<p>yo dawg enable some scripts or get a new browser</p>
</noscript>
```
<noscript>
<p>yo dawg enable some scripts or get a new browser</p>
</noscript>

### 9. `<figure>` -- Groups media content with a caption

* *type:* block-level
* *content:* Flow content[1] with '<figcaption>' before or after
* *support:* all browsers
* *example:*
```
<figure>
<img src="https://pbs.twimg.com/profile_images/3057783705/bd2891fa1e9eacb32a4f23d6f866b593_400x400.png" alt="un iron yard"><figcaption>home is where the heart is</figcaption>
</figure>
```
<figure>
<img src="https://pbs.twimg.com/profile_images/3057783705/bd2891fa1e9eacb32a4f23d6f866b593_400x400.png" alt="un iron yard"><figcaption>home is where the heart is</figcaption>
</figure>

### 10. `<blockquote>` -- indicates enclosed text is an extended quotation

* *type:* block-level
* *content:* flow content[1]
* *support:* all browsers
* *example:*
```
<blockquote cite="http://southpark.cc.com/">
<p>Screw you guys, I'm going home.</p>
</blockquote>
```
<blockquote cite="http://southpark.cc.com/">
<p>Screw you guys, I'm going home.</p>
</blockquote>

### Footnotes:

1. [flow content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content)
2. [phrasing content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content)
3. [metadata content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Metadata_content)
