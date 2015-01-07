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

### 11. `<article>` -- represents a self-contained composition in a document page

* *type:* block-level
* *content:* flow content[1], sectioning content, palpable content
* *support:* all browsers
* *example:*
```
<article>
  <h4>totally bitchin' article</h4>
  <p>all this sweet sweet text about that!</p>
</article>
```
<article>
<h4>totally bitchin' article</h4>
<p>all this sweet sweet text about that!</p>
</article>

### 12. `<aside>` -- represents a section of the page with content connected tangentially to the side

* *type:* block-level
* *content:* flow content[1], sectioning content, palpable content
* *support:* all browsers
* *example:*
```
<aside>
  <p>who doesnt love tangents? espescially on the side!</p>
</aside>
```
<aside>
<p>who doesnt love tangents? espescially on the side!</p>
</aside>

### 13. `<canvas>` -- drawing canvas

* *type:* block-level
* *content:* flow content[1], phrasing content[2], embedded content, palpable content
* *support:* firefox only
* *example:*
```
<canvas width="100" height="100">
Sorry, your browser doesn't support the &lt;canvas&gt; element.
</canvas>
```
<canvas width="100" height="100">
Sorry, your browser doesn't support the &lt;canvas&gt; element.
</canvas>

### 14. `<header>` -- section or page header

* *type:* block-level
* *content:* flow-content[1], palpable content
* *support:* all browsers
* *example:*
```
<header>
  this section below is going to be so boss
</header>
```
<header>
this section below is going to be so boss
</header>

### 15. `<ol>` -- ordered list

* *type:* block level
* *content:* Flow content, and if the <ol> element's children include at least one <li> element, palpable content.
* *support:* all browsers
* *example:*
```
<ol>
  <li> item one </li>
  <li> item two </li>
  <li> item three </li>
</ol>
```
<ol>
<li> item one </li>
<li> item two </li>
<li> item three </li>
</ol>

### 16. `<ul>` -- unordered list

* *type:* block-level
* *content:* flow content[1]
* *support:* all browsers
* *example:*
```
<ul>
<li> item who cares what number </li>
<li> item who cares what number again</li>
<li> item who cares what number last?</li>
</ul>
```
<ul>
<li> item who cares what number </li>
<li> item who cares what number again</li>
<li> item who cares what number last?</li>
</ul>

### 17. `<form>` -- represents a document section that contains controls to submit information

* *type:* block-level
* *content:* flow content[1], palpable content
* *support:* all browsers
* *example:*
```
<form>
<input type="radio" name="mrormrs" value="mr">Mr<br>
<input type="radio" name="mrormrs" value="mr">Mrs<br>
first name:
<input type="text" name="firstname">
<br>
last name:
<input type="text" name="lastname">
</form>
```
<form>
first name:
<input type="text" name="firstname">
<br>
last name:
<input type="text" name="lastname">
</form>

### 18. `<section>` -- represents a generic section of a document

* *type:* block-level
* *content:* flow content[1], sectioning content, palpable content
* *support:* all browsers
* *example:*
```
<section>
  <h3>awesome section</h3>
  <p>awesome section text!</p>
</section>
```
<section>
<h3>awesome section</h3>
<p>awesome section text!</p>
</section>

### 19. `<video>` -- used to embed video content

* *type:* block-level
* *content:* flow content[1], phrasing content[2], embedded content if with controls interactive content and palpable content
* *support:* all browsers
* *example:*
```
<video src="idonthaveavideo.mp4" width="260" height="378" controls poster="http://www.rankopedia.com/CandidatePix/36731.gif">
sorry your browser cant play video OR there is actually no video.
</video>
```
<video src="idonthaveavideo.mp4" width="260" height="378" controls poster="http://www.rankopedia.com/CandidatePix/36731.gif">
sorry your browser cant play video OR there is actually no video.
</video>

### Footnotes:

1. [flow content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content)
2. [phrasing content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content)
3. [metadata content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Metadata_content)
