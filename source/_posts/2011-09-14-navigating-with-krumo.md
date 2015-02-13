---
title: "Navigating with Krumo"
date: 2011-09-14 09:13
tags:
- drupal
- Drupal Planet
- tools
- devel

comments: true

redirect:
- krumo/
- blog/2011/09/14/navigating-with-krumo/
---
[The Devel module](http://drupal.org/project/devel "Devel | drupal.org") includes the super helpful [Krumo library](http://krumo.sourceforge.net/). I use `dsm()` and `krumo()` all the time. If you are not familiar with Devel, you should try it. Morten Wulff wrote a [demo page for the module](https://ratatosk.backpackit.com/pub/1836982-debugging-drupal).

![Krumo output](/img/krumo.png "Krumo output")

Today a client suggested that the Devel module Krumo could display the "path" to an item in an array by right clicking or otherwise interacting with the nested elements in the output from Krumo. I was really excited about that idea - I can't count the number of times I have tried and failed to target an item deep in a form array or an item in the node object simply because my human brain can't remember a structure like `$form['#node']->content['links']['comment']['#attributes']['class']` for more than 3 seconds.

Still very happy with this new idea I went straight home and started to hack away at the Krumo library to make it display the path to a desired item. After looking at the javascript for a while, and saying out loud that Javascript hates me, I realized that the killer feature I was trying to make already exists in Krumo! This is a well hidden gem that I haven't seen before today, so I thought I would share it:
If you double click an item in the Krumo output it prints the items array "path" so that you can copy paste it into your code and stop worrying about remembering long array structures.

![Krumo path](/img/krumo_path.png "Krumo path")

Thanks to Niels Fanøe for the inspiration.

EDIT: I was using the dev D7 version, and the feature just went in this August. Thanks to Mark Theunissen for pointing that out. I also feel less stupid for not discovering the feature before now!
