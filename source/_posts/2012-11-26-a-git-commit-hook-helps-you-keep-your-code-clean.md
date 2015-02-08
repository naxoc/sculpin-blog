---
title: A git commit hook helps you keep your code clean
date: 2012-11-26 22:18
comments: true
tags:
- git
- Drupal Planet
-  drupal

redirect:
- blog/2012/11/26/a-git-commit-hook-helps-you-keep-your-code-clean/
---
I like to keep my code free of trailing whitespace. I feel what xjm describes as "[spinach in your teeth](http://xjm.drupalgardens.com/review-guide)" about whitespace and non-conforming coding standards.

I got (heavily) inspired by Josh The Geek's [git pre-commit hook](http://drupal.org/sandbox/JoshTheGeek/1143338), and made myself a commit hook that will check the code I am about to commit for common errors. In addition to whitespace, I like to make sure that I don't accidentally commit debug code like `krumo()`. The commit hook also checks for common calls to debug functions.

If you want to use it, simply put it in your .git/hooks folder in your git checkout. Make sure the file is executable with `chmod +x .git/hooks/pre-commit`. This will only effect the git checkout you put the commit hook in, but you can make it apply to all future checkouts by putting it in your git install directory's template folder. Where that folder is will vary, but on my mac it is in /usr/share/git-core/templates/hooks.

The script is not the most clever in the world, so it will be wrong about some things from time to time. You can override it and still commit with the command `git commit -n`

Here is the pre-commit file: [Gist is here](https://gist.github.com/naxoc/4150599).
``` php
#!/usr/bin/php
<?php
/**
 * @file
 * This is a Git pre-commit hook that informs you when you are
 * about to commit whitespace or a debug function.
 */

$red = "\033[1;31m";
$red_end = "\033[0m";

$yellow = "\033[1;33m";
$yellow_end = "\033[0m";

/**
 * An array of functions to check for.
 */
$check = array();
$check[] = ' dsm(';
$check[] = ' dpm(';
$check[] = ' dpr(';
$check[] = ' dprint_r(';
$check[] = ' db_queryd(';
$check[] = ' krumo';
$check[] = ' kpr(';
$check[] = ' kprint_r(';
$check[] = ' var_dump(';
$check[] = ' dd(';
$check[] = ' drupal_debug(';
$check[] = ' dpq(';

$return = 0;
$diff = array();
exec('git diff --staged', $diff, $return);

if ($return !== 0) {
  fwrite(STDOUT, "git diff returned an error. Commit aborted.\n");
  exit(1);
}

foreach ($diff as $lineno => $line) {
  if (substr($line, 0, 1) != '+') {
    // Skip the line if you aren't adding something that may contain a debug
    // function call.
    continue;
  }
  foreach ($check as $lineno => $function) {
    if (strstr($line, $function)) {
      fwrite(STDOUT, "{$red}Oh, noes! You were about to commit a $function)?{$red_end}\n");
      fwrite(STDOUT, $yellow . $line . $yellow_end);
      fwrite(STDOUT, "\nCommit aborted.\n");
      exit(3);
    }
  }
}

$whitespace = shell_exec('git diff --staged --check');
if (!empty($whitespace)) {
  fwrite(STDOUT, "{$red}Commit aborted. Fix trailing whitespace.{$red_end}\n");
  fwrite(STDOUT, $yellow . $whitespace . $yellow_end);
  exit(4);
}

// If this is still running, all is peachy. Let the developer commit.
exit(0);
```
