---
title: "Switching back to Firefox"
date: 2014-06-03 16:38:30 +0200
comments: true
tags:
- firefox
- browser
- tools
- chrome

---
I have been using Firefox since it came out. I used it back when it was called Firebird and Phoenix. I went to the release party when 1.0 came out and I have advocated using Firefox to anybody that wanted to listen -- and a few that didn't.

2-3 years ago I switched to Chrome along with a lot of other people. Firefox was getting bloated and Chrome had all kinds of shiny tools. But I am back to using Firefox now, and I thought I would explain what lured me back in this post.

I didn't switch because I was tired of, or unhappy with Chrome. I still use both so that I can be logged in to work stuff in one and my own stuff in the other. But I mainly use Firefox for web development now. It should be said that I use the [Firefox Beta](http://www.mozilla.org/en-US/firefox/channel/#beta) version and I have had no problems with that. The reason I use the beta is that I really like a couple of the developer tool features, but version 29 also has nice developer tools.

These are some of the features and tools that have impressed me:

## Developer Toolbar
Of all the shiny things this one was the one that made me switch. Firefox now has a developer toolbar that sits at the bottom of the page for as long as you want it around. Toggle it with Tools > Web Developer > Developer Toolbar. I just keep it around at all times. To change focus and go to it use `shift+F2`. You can run commands from text in the toolbar and it also shows a little red badge if there are javascript errors on the page.

### So what does it do?
Well, it's a browser command line for web developers. Try typing `help` and get a list of commands. I use the `cookie` and `inspect [element]` most, but the `resize toggle` is pretty sweet too. Just like CLI it has completion and arrow up gets your history of commands. Another really cool one is `media emulate print` -- it will show you the page with the print style sheet (or whatever media you put after emulate).

All these things can be done with the mouse too I'm sure, but I like it that I can access these tools really fast with a browser CLI.

![Firefox cookies](/img/cookies.png)
The screenshot shows output from the command `cookie list`. You can find more info on the toolbar in the [mozilla.org docs](https://developer.mozilla.org/en-US/docs/Tools/GCLI).

## Scratchpad
The scratchpad is a 'js-editor' that lives in its own window. Invoke it from the Tools > Web Developer menu or by going `shift+F4`. You can write js and execute it with one of the three buttons. The code you write will be in the scope of the browser window you were in when you invoked the scratchpad so you can test your jQuery snippets or whatever does it for you. There are instructions on how to use the buttons in the comment that is displayed at the top of the file. One thing that is left out that is super helpful though is `cmd+shift+r`. That will reload the browser window, but keep your js code in the scratchpad.

The keyboard shortcuts are the same as for the style editor and the debugger. There are even key bindings for emacs and vim! To set key bindings, go to `about:config` in Firefox's location bar and set `devtools.editor.keymap` to "vim" or "emacs".

## Pretty inspector
This one is very subjective, but I think that the inspector and the whole developer tools is really pretty. I use the light color scheme, and it just looks better than Chrome's dev tools. I know, but I had to get that one of my chest. There is a dark color scheme setting in the options (click the gear).

There is a font preview tab in the right box on the inspector tab. It's nice to have a clue about the font. I am not a designer, so most the time I don't have a clue. This helps:

![Fonts](/img/fonts.png)

Another cool thing about the inspector is the "guides" it shows when it highlights an element. It is best illustrated with an image. I am talking about the dotted lines that helps you see if you are aligned with what you want to be aligned with.

![Firefox inspector](/img/inspector.png)

## Network tab
Like with the inspector -- I just think it's pretty. And there are some useful things too! The filtering in the right hand box is really good. There is also a view with pie charts showing the page loaded twice: once with an empty browser cache and once with a primed browser cache. It is quite interesting to compare the two when you are slimming your page weight down. To get to it click the button on the lower right hand when on the network tab: ![Firefox inspector](/img/cache-button.png)

You then get this:

![Primed cache](/img/primed-cache.png)

See more about the network tab at the developer docs on [mozilla.org](https://developer.mozilla.org/en-US/docs/Tools/Network_Monitor)

## Mobile version
I have an Android phone whose factory default browser is Chrome. Firefox can sync between desktop and phone just like Chrome and I think it is as fast. Plus I also just like how it looks.

## So what?
I don't have a strong enough opinion to start a browser war. I like both Chrome and Firefox and I will continue to use both. This blog post is just to describe the new cool stuff in Firefox and once again -- whether you want to listen or not -- I encourage you to try Firefox and play around with the new dev tools.
