---
title: "Using specific versions of formula with Homebrew"
date: 2012-06-05 13:54
comments: true
tags:
- cli
- PHP
- tools
- homebrew

redirect:
- brew-switch/
- blog/2012/06/05/using-specific-versions-of-formula-with-homebrew/
---
I have my LAMP stack and other things set up on my mac with the wonderful <a href="http://mxcl.github.com/homebrew">Homebrew</a>.

I recently did a <code>brew upgrade</code> on my system and it seemed that everything went smooth. But when I later ran PHP from the command line I got this error:
```
PHP Warning:  PHP Startup: Unable to load dynamic library '/usr/local/Cellar/memcached-php/2.0.1/memcached.so' - dlopen(/usr/local/Cellar/memcached-php/2.0.1/memcached.so, 9): Library not loaded: /usr/local/lib/libmemcached.9.dylib
  Referenced from: /usr/local/Cellar/memcached-php/2.0.1/memcached.so
  Reason: image not found in Unknown on line 0
```

I poked around in my php.ini to see if the wrong file was being included or something like that, but it turned out that I had upgraded to a newer version of libmemcached than the one memcached was using. So I needed to downgrade libmemcached. Here is how to switch to any version available with Homebrew:


* <code>brew versions libmemcached</code>

* Find and note the version number you want. In my case I wasn't sure, so I just went with the second newest and that worked.

* <code>brew switch libmemcached 1.0.4</code>

Change the version number and the formula above to whatever makes sense for what you are doing.

The example above is using a command that is an <a href="https://github.com/mxcl/homebrew/wiki/External-Commands">external command</a> for Homebrew. It works super fast and is easy to use.
