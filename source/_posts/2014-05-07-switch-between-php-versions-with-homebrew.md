---
layout: post
title: "Switch between PHP versions with Homebrew"
date: 2014-05-07 20:25:40 +0200
comments: true
tags:
- cli
- PHP
- tools
- homebrew

---
I am working on a few older Drupal sites that are quite insistent on using PHP 5.3 and not PHP 5.4. No problem - I'll just use Homebrew to switch between versions! But I have been running into all kinds of problems every time I have done this, so I figured I would post what I do to repair things here.

So, in theory all you should have to do is install the versions you need if you don't already have them.
`brew install php53`
And when you want to switch just run this:
`brew unlink php54 && brew link php53`

Apache also needs to know what version to use, so edit _/private/etc/apache2/httpd.conf_ so that the line that looks like this has the right (major) version number:
`LoadModule php5_module /usr/local/opt/php54/libexec/apache2/libphp5.so`

So far so good. You can check the version from the command line:
```
➜  ~  php --version
PHP 5.3.28 (cli) (built: May  7 2014 09:50:08)
Copyright (c) 1997-2013 The PHP Group
Zend Engine v2.3.0, Copyright (c) 1998-2013 Zend Technologies
    with Xdebug v2.2.5, Copyright (c) 2002-2014, by Derick Rethans
```

If you are not seeing what you expect, try adding add this to your _.bashrc_ or _.zshrc_ with the correct version number:
 `export PATH="$(brew --prefix homebrew/php/php54)/bin:$PATH"`

If things are working now thats great! It doesn't always for me. I get this:
```
➜  ~  php -i
dyld: Library not loaded: /usr/local/lib/libpng15.15.dylib
  Referenced from: /usr/local/opt/php53/bin/php
  Reason: image not found
```
Sadly the only workaround I have found is to uninstall and install again:
  `brew uninstall php53 & brew install php53`


  It takes quite a long time but it does the trick.
