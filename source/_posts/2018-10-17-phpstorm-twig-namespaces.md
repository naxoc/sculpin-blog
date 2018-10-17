---
title: "Navigate in Twig namespaces in PhpStorm"
date: 2018-10-17 22:20:00 +0200
comments: true
tags:
- phpstorm
- twig
excerpt: "Make Twig files included clickable in PhpStorm."
---
I've gotten so used to have everything be clickable or navigable in PhpStorm. "I wonder what that function deep in the vendor folder looks like?" - I command click on Mac or ctrl click on Linux (or command+b/ctrl+b), and boom I go to the function definition. I don't know how I lived without it in the past.

But when I was writing a lot of Twig this spring I was sad that the file in Twig was not navigable like this:
<img class="centered-image" src="/img/namespace-navigate.gif" alt="Add Twig namespace in PhpStorm">


It took me forever to find out how to set it up. You need to install the [Symfony plugin](https://plugins.jetbrains.com/plugin/7219-symfony-plugin) and either manually add the namespace under "Languages & Frameworks" -> "PHP" -> "Symfony" -> "Twig/Template":
<img class="centered-image" src="/img/namespace.png" alt="Add Twig namespace in PhpStorm">
- or even better, you can add a file called `ide-twig.json` where you tell the editor where to find files from a namespace. If you namespace was called "mynamespace" your file could look like this:
```json
{
  "namespaces": [
    {
      "namespace": "mynamespace",
      "path": "templates/stuff"
    }
  ]
}
```
where the path is relative to your Twig templates. 

The feature with the `ide-twig.json` file was added in the Symfony Plugin in [version 0.11.110](https://plugins.jetbrains.com/plugin/7219-symfony-plugin/update/24192) years ago, but I've not come across much documentation for it. So now it's in this blog post.

