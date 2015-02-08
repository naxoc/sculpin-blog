---
title: "Placeholder selectors in SASS"
date: 2014-01-28 19:45
comments: true
tags:
- SASS
- SCSS
- CSS
- code organization

---
When I found that you can '@extend' classes in SASS to reuse code and compile to neater CSS I was pretty excited. Here is an example of 'inheriting' code with @extend:
```scss
.speak {
  font-family: Courier New, monospace;
  max-width: 400px;
  clear: both;
  span {
    font-weight: bold;
    display: block;
  }
}
.voice-1 {
  @extend .speak;
  span {
    color: magenta;
  }
}
.voice-2 {
  @extend .speak;
  float: right;
    span {
      color: green;
  }
}
```
That will compile to:

```css
.speak, .voice-1, .voice-2 {
  font-family: Courier New, monospace;
  max-width: 400px;
  clear: both;
}
.speak span, .voice-1 span, .voice-2 span {
  font-weight: bold;
  display: block;
}
.voice-1 span {
  color: magenta;
}
.voice-2 {
  float: right;
}
.voice-2 span {
  color: green;
}
```
So `voice-1` and `voice-2` get the same properties as the `speak` class and the code is reused. All is good, but I don't really have a class called `speak`. And more importantly - I want to be able to define my `speak` selector in a base file that is included in lots of other .scss files so that it becomes truly reusable. But here I run into the problem that every time I include the \_base.scss file, the selector gets written to the file including the file. That becomes a mess of repeated code really fast.

I found out about SASS placeholder selectors recently and once again my mind was blown. So a placeholder selector is a selector just like `.speak`, but instead of a dot (for class) it is prefixed with a percent sign. Selectors prefixed with `%` don't get rendered to CSS, so I don't have to worry about duplicated code or not actually having a class somewhere called `speak`. Now I can define the selector in a base file and extend it over and over in included files.

So:
```scss
%speak {
  font-family: Courier New, monospace;
  max-width: 400px;
  clear: both;
  span {
    font-weight: bold;
    display: block;
  }
}
.voice-1 {
  @extend %speak;
  span {
    color: magenta;
  }
}
.voice-2 {
  @extend %speak;
  float: right;
    span {
      color: green;
  }
}
```
Becomes:

```css
.voice-1, .voice-2 {
  font-family: Courier New, monospace;
  max-width: 400px;
  clear: both;
}
.voice-1 span, .voice-2 span {
  font-weight: bold;
  display: block;
}
.voice-1 span {
  color: magenta;
}
.voice-2 {
  float: right;
}
.voice-2 span {
  color: green;
}
```
<!-- more -->
Here is a Codepen with the placeholder selectors (and some Monty Python). If you want to play around with it, take note of the "view compiled" link in the lower right corner when you are on the SCSS tab.

<p data-height="339" data-theme-id="0" data-slug-hash="idqFC" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/naxoc/pen/idqFC'>SASS placeholder selectors example</a> by Camilla Krag Jensen (<a href='http://codepen.io/naxoc'>@naxoc</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>
