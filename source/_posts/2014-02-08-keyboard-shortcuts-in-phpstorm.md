---
title: "Keyboard shortcuts in PHPStorm"
date: 2014-02-08 13:27:35 +0100
comments: true
tags:
- PHPStorm
- keyboard shortcuts
- productivity

---
Coming from Vim to PHPStorm I use the mouse a whole lot more than I did before. Vim is amazing once you learn it and the mouse can take long naps when you do everything with keyboard commands. PHPStorm is a great IDE, so I switched because I felt like I got so much more good stuff like the debugger, easy refactoring, structural overview, and so on. In the beginning I used the IdeaVim plugin in PHPStorm so editing seemed more like Vim, but I ended up abandoning that because I found it buggy.

Anyway. I slowly learned new keyboard shortcuts for PHPStorm and I wanted to share some of my favorites. Jetbrains has a [a list of keyboard shortcuts you cannot miss](http://www.jetbrains.com/phpstorm/webhelp/keyboard-shortcuts-you-cannot-miss.html) too, but most of the ones I find to be super useful are not on that list.

It should be said that I am on a Mac using the "Mac OS X 10.5" [keymap in PHPstorm](https://www.jetbrains.com/phpstorm/webhelp/keymap.html).

## Navigating
* `command+[` and `command+]` to go back to the place in the code where you just were or forward respectively.
* `command+shift+delete` go back to the last place in code you edited.
* `cmd+F12` bring up a quick window with all functions/classes in the current file. Type to filter and go to. I use this one all the time. I realise that I could also just use `option+command+o`, but this one is much faster and narrowing down is easier.

## Tools
* `command+1` toggles the project pane that shows the file tree. For extra usefulness, do this one time setting: Click the gear in the menu and choose "autoscroll from source". Now the tree always shows you where you are in the file structure.
* `command+3` toggles the "find" pane. Useful for going back to see a global search done with `command+shift+f`. To navigate between search results use `command+option+arrow-up/down`
* `commmand+5` toggles the debugger pane.
* `command+7` toggles the PHP structure pane.
* `command+9` toggles the version control pane. I don't use this a whole lot---I prefer the command line for Git, but there are some nice features in the VCS tools in PHPStorm. My favorite VCS keyboard shortcut (actually this one is kind of a sequence) is `ctrl+v` and then hit 5 to get a Git blame panel.

## In the debugger
* `option+command+r` will resume.
* `command+f2` will stop (kill).
* `F8` will step.
* `shift+command+F8` will show you a list of all your breakpoints.

These are some of my favorites. Comment and share yours!

