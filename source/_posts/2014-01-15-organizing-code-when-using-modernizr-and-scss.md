---
title: "Organizing code when using Modernizr and SASS"
date: 2014-01-15 12:45
comments: true
tags:
- SASS
- SCSS
- modernizr
- CSS
- browser support

---
The JS library [Modernizr](http://modernizr.com) makes it really easy to write CSS with support for older browsers. What it does is put classes in the `<body>` tag that will tell you what the browser doesn't support. For instance IE9 in the screenshot does not support CSS gradients:

![Modernizr body tag classes](/img/modernizr_body_tag_classes.png)

I was going trough with IE9 on a rather large site that uses some spiffy CSS3 tricks to achieve awesome. It has been a pleasure to work with [Compass](http://compass-style.org/) and SASS to build the site, but when it came to making it look decent in IE9 there was some work to be done.

I started to work on it, but I quickly got frustrated with the organization of the SCSS. Where should I put the IE-fallbacks? In a ie9.css style sheet? Well, that really keeps the code scattered everywhere. I wanted to keep the fallbacks as close to the original CSS3 tricks as I could so I started putting code like this as close to the "real" selector as I could:
``` scss
.some-div {
  .special-list {
    .extra-special-link {
      @include background(linear-gradient(left, rgba(242, 156, 45, 0), rgba(242, 156, 45, 1) 30%, rgba(242, 156, 45, 1) 70%, rgba(242, 156, 45, 0)),
    }
  }
}
// Also support archaic browsers for the extra special link (see above).
.no-cssgradients .some-div .special-list .extra-special-link {
  background: rgba(242, 156, 45, 0);
}
```
While this works, it becomes hard to find out what the targets are, because the whole structure needs to be prefixed with the `no-cssgradients` class. I would much rather have the fallbacks in the code right next to the 'actual' CSS. I did some googling for best practices for structuring the code and found [this post](http://neilcarpenter.com/2013/05/graceful-degradation-workflow-using-feature-detection-and-css-preprocessors/) on Neil Carpenter's blog that showed me that the '&' ampersand used _behind_ the selector will do exactly what I wanted! This may be really trivial, but I had no idea the ampersand could be used like that in SASS. So the above code can be simplified to:
``` scss
.some-div {
  .special-list {
    .extra-special-link {
      @include background(linear-gradient(left, rgba(242, 156, 45, 0), rgba(242, 156, 45, 1) 30%, rgba(242, 156, 45, 1) 70%, rgba(242, 156, 45, 0)),
      .no-cssgradients & {
        background: rgba(242, 156, 45, 0);
      }
    }
  }
}
```
Yay! I can now keep my fallbacks together with the actual CSS and never worry about ie9.css or other tricks that separate the fallbacks from reality.


