---
title: "Moving an iTunes Library"
date: 2011-05-11 15:22

tags:
- itunes
- cli

redirect:
- moving-itunes-library/
- blog/2011/05/11/moving-an-itunes-library/
---
If you are moving an iTunes library to a new mac it will go smooth if the user login is the same. So if I move my iTunes library from an old machine where it was located in `/Users/ckj/iTunes` to a new machine where it is gonna go in `/Users/ckj/iTunes` - I have no problems. But if I changed to another username on the new machine - all the paths in the iTunes Library.xml file will not be correct anymore. I have moved libraries so many times now and I thought I would share a really quick way to fix the iTunes Library.xml file to reflect the correct user directory.

If you use the built-in command line tool called [sed](http://en.wikipedia.org/wiki/Sed), you can type one line in the terminal and be done. Let’s say I was moving from a mac with a user directory called "ckj" to another machine with a user directory called "naxoc". All I would have to do in the terminal would be this:

1.  cd to the iTunes folder in the user directory you are moving to.
2.  Enter this: `sed -i "" -e "s,Users/ckj,Users/naxoc,g" files iTunes\ Library.xml`

Note the funky syntax with the `-i ""` This is a mac quirck in sed. I found some info on it [here](http://stackoverflow.com/questions/2320564/variations-of-sed-between-osx-and-gnu-linux).
