---
title: Upgraded to Drupal 7
date: 2010-10-18 20:58
tags:
  - drupal
  - D7
  - Drupal Planet

redirect:
  - upgraded-to-drupal-7/
  - blog/2010/10/18/upgraded-to-drupal-7/

---
I updated this website to D7 this weekend. [Mikkel](http://mikkel.hoegh.org/blog/2010/oct/7/relaunching-blog-drupal-7 "Relauching my blog on Drupal 7 | Mikkel Høgh") upgraded his site and urges others to do so now, so I thought I'd give it a shot too. And it was good fun! OK, granted, this site is 4 posts and pretty much nothing else, but that makes it a perfect time to upgrade.

I actually never did an actual core upgrade via the upgrade path before. The sites I have upgraded from D5 to D6 have pretty much all had such a complex data structure that I had to do an upgrade with a data migration. While that is a lot of work (and requires a programmer), I still like the opportunity it gives to clear out a data model that might have grown a little too organically. For this site though, that would be gross overkill. So my approach was simply to read UPGRADE.txt and follow the steps.

### Modules

I don't use any of the big modules like CCK, views or panels. In fact I ended up with only 3 enabled contrib modules.

* On D6 I had a tag cloud that the [tagadelic module](http://drupal.org/project/tagadelic "Tagadelic | drupal.org") made, but I simply removed that because I couldn't see a 7.x branch on d.o. It turns out that there is work in progress to port it, so in [this issue](http://drupal.org/node/749440 "Any plans for a Drupal 7 release / upgrade / version ? | drupal.org") I found that [development is going on github](http://github.com/mscharley/tagadelic/tree/DRUPAL-7--1 "mscharley"). I really like that module so I might take a look and see if I can help.

* The [twitter module](http://drupal.org/project/twitter "Twitter | drupal.org") does not have a 7.x branch either, [but there is work going on](http://drupal.org/node/780712 "Drupal 7 port of Twitter module | drupal.org"). I decided to go for the easy choice so far and just this [twitter-widget](http://twitter.com/goodies/widget_profile) and embed the code in a block. In fact for my need that is just fine.

*  I have always loved the [admin_menu module](http://drupal.org/project/admin_menu "Administration menu | drupal.org") even though the fancy menu that sits on the side and awaits your click in rubik is nifty, I still like the overview that admin_menu gives me better. Luckily there is a 7.x branch and it also packs a neat integration with the top toolbar that D7 ships with.

*  [Google analytics](http://drupal.org/project/google_analytics "Google Analytics | drupal.org") has a 7.x branch and I had no trouble with that other than some problem with actually writing the tracking codes. But it turned out that the theme was not doing that.

*  The [Mollom module](http://drupal.org/project/mollom "Mollom | drupal.org") was not working, but I think I upgraded it wrong. As soon as I uninstalled it and installed it again it was fine. It threw errors at me when I enabled it after the core upgrade, so I must have missed something there.

* I use [ecto](http://illuminex.com/ecto/ "illumineX :: ecto - blog editor for Mac OS X") as a blogging client for my D6 sites. The [blog API](http://drupal.org/project/blogapi "Blog API | drupal.org") module was taken out of D7 and now [lives on its own here](http://drupal.org/project/blogapi "Blog API | drupal.org"). I tried to make it work, but I can see that it will take me some time. I will have to spend more time playing with that.

### Theme

I really like the [Corolla theme](http://drupal.org/project/corolla "Corolla | drupal.org"). I knew I wanted to use that so I didn't even browse around for a D7 theme. Configuring color and all that was easy, and the only problem I ran into was the theme [not printing the footer](http://drupal.org/node/945124 "Footer is not output anywhere | drupal.org") with the google analytics tracking codes.

### So what's it like?

I like D7. A lot. I have been playing around with it for a long time, but always with test data, the standard theme, and not so many contrib modules. It's great to see it all come together. One thing that took me a long time to get used to is the overlay. At first I hated it, but during the last 6 months or so it's grown on me. I am still not sure I would keep it enabled on any site, but it gets a chance on my site for now.

Another thing in D7 that really threw me off during the upgrade was that the core modules are listed first on the modules page. For a while I thought that drupal was just not finding my contrib modules. I would probably put them at the bottom if I was to sort them other than alphabetically.

I am excited to finally run Drupal 7! And I can't wait to play with more contrib modules more and see what cool stuff comes out of all the new opportunities in D7.
