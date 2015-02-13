---
title: "Pet peeve #1 - the comparison operator"
date: 2010-12-10 14:27
tags:
  - pet peeves
  - PHP
  - Drupal Planet

comments: true
redirect:
  - pet-peeve-1-comparison-operator/

---
I have a lot of pet peeves when it comes to programming, databases, web content, food, beer, and, well just about everything. I am thinking of making a series of pet peeves here on this site. Some will seem like plain rants, and others will be more like tips.

When making comparisons, switch the order of the things you compare like this:
``` php
if ('book' == $node->type) {
// Stuff happens.
}
```
You might think why? And that looks weird! Yes, it does look a little weird. But I do this to not accidentally assign the $node->type the value I am comparing it with. It is hell to find an error like this when debugging:
``` php
if ($node->type = 'book') {
// Stuff happens whether you like it or not.
}
```
See what happened? I only put one = instead of two. PHP will not complain about this, I will just not get what I expect. If I had switched the items, PHP would have complained as I tried to assign an object to a non-variable.
