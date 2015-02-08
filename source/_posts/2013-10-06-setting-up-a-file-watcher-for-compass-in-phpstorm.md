---
title: "Setting up a file watcher for Compass in PHPStorm"
date: 2013-10-06 20:55
comments: true
tags:
 - PHPStorm
 - Compass
 - CSS

---
EDIT: _It seems that the version 7 early access now has a file watcher preset for Compass - nice work JetBrains! The part about scope from this blog post is still useful to you if you are on PHPStorm 7 though._

I started using PHPStorm about 6 months ago and while it is an extremely awesome and powerful IDE there are just so many things you can set up and configure. I have to admit that for the first couple of months I pretty much used PHPStorm just like I did Vim and not using any of the many configurable things except for the debugger. I am slowly venturing into playing around with setting more stuff up, and I thought I would share this one because it took me a while to get right.

It is super simple to use the [Compass compiler](http://compass-style.org/) from the command line and I always have. But PHPStorm can compile your .scss files into .css on the fly so why not take advantage of that.

So here is what I did. The settings assume that you use something that resembles the default settings in a Compass project with a folder for the scss files and the css being output to another folder called something like "stylesheets" or "css" (could be anything really). You also need to have [Compass installed on your machine](http://compass-style.org/install/).

1. In the PHPStorm settings, go to "File Watchers".
2. Click the plus to add a watcher and choose SCSS.
3. Edit the settings to look like the ones on the screenshot. Where Compass is installed on your machine may not be in /usr/bin/compass like it is on mine, but you can use the command `whereis compass` from your command line to figure out where compass is. The output path is "stylesheets" for me for this particular project, but you shold edit that to whatever your project has named the css output folder.

![Settings in PHPstorm](/img/compass-phpstorm.png "Settings in PHPstorm")

Note that I have created a "scope" called Theme. Scopes in PHPStorm are parts of your project that you would like included or excluded in things like searches and settings like this Compass setup. There is no reason for PHPStorm to listen for changes to your module files if your theme folder is where you have your Compass project. So if you click the button with the three dots at the scope field you can setup PHPStorm to only look where it is relevant. I use scopes a lot to cut down on how long searches take, so setting up a few scopes for each project is time well spent.
