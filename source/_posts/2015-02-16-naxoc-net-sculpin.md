---
title: "naxoc.net is now on Sculpin"
date: 2015-02-19 16:51:03 +0200
comments: true
tags:
- sculpin
- php
- blogging

---
I have changed the blogging engine for this blog once again. This blog was on [Drupal](http://drupal.org) for a while, then on [Octopress](http://octopress.org/) (Jekyll), and now on [Sculpin](http://sculpin.io). I was never unhappy with either of them&mdash;I just enjoy playing around with new stuff every once in a while.

This blog is now a custom Sculpin thing. There is a [blog skeleton](https://github.com/sculpin/sculpin-blog-skeleton) available to get you started, but I thought I would roll my very own with some heavy inspiration from the skeleton. I also wanted my "theming" to be custom so I could play with new shiny things like [Gulp](http://gulpjs.com). 

I probably spent the most time monkeying around with Gulp. I hadn't used Gulp before and I only had a weak grasp of Grunt, so there was some learning to be done there. I got it working great with [Browsersync](http://www.browsersync.io), [Bourbon](http://bourbon.io) and sourcemaps. All sweet stuff that I will write more blog posts about.

Using Sculpin is really easy. I never really touched any PHP code other than pasting a little code into `SculpinKernel.php` to enable redirects via [mavimo's Sculpin Redirect Bundle](https://github.com/mavimo/sculpin-redirect-bundle). So all I had to do was create some `.html` files with [Twig](http://twig.sensiolabs.org) syntax to render my markdown files. I could migrate the `.md` files from Jekyll format pretty easily&mdash;I just had to remove the Octopress-specific image tags I had in my markdown. 

As a PHP developer I feel much more at home with Sculpin than I did with Octopress and Jekyll. Neither are that hard to use, but I really like how Sculpin is simple and doesn't do too many things I don't need.

The only downside to Sculpin over Jekyll is that hosting the site on Github Pages is a little harder. It is still totally doable, but you have to commit the generated content for Github to be able to serve the pages. I simply chose to just push the generated files to my VPS.

If you are curious about Sculpin and how this blog is created, you can check out my [Github repository](https://github.com/naxoc/sculpin-blog) for naxoc.net.
