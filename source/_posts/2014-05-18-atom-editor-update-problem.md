---
title: "Atom editor update problem"
date: 2014-05-18 20:51:03 +0200
comments: true
tags:
- atom
- editor

---
I have been playing around with Github's new editor [Atom](http://atom.io) for a while now. I actually quite like it, but it still hasn't taken Vim's place as my default editor yet. Maybe it will at some point, but we'll see.

Atom updates itself and that has been working great, only it stopped working a while ago. It threw some long error to the GUI editor that I can't remember and when I tried to run `apm upgrade` it said:
```
➜  ~  apm upgrade
Package Updates Available (0)
└── (empty)
```
-- even though in the UI it said it had an update ready.


I poked around a for a while until I found a couple of mentions in the support forums [like this one](http://discuss.atom.io/t/cant-install-or-update-packages/1623) saying that you should just set file permissions on your `~/.atom/.node-gyp` folder. So I did
```
chmod -R 777 ~/.atom/.node-gyp
```
and restarted the GUI Atom.app. Now my update was applied and everybody was happy again!
