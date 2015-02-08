---
title: Hide Drupal files with .htaccess
date: 2009-11-13 23:50
tags:
  - apache
  - drupal
  - Drupal Planet

redirect:
  - hide-drupal-files-htaccess/

---
If one goes to somedrupalsite.com/CHANGELOG.txt - it is normally possible to read the file and see what version of Drupal the site is running. If you don't want everybody to see what version you are running, it is a good idea to cloak the *.txt files in the Drupal install.

Using rewrite rules in .htaccess, the *.txt files in Drupal can be hidden. I use a 403 - forbidden on these files. That is what the [F] means See the Apache documentation on RewriteRule for more options.
```
# No need for the common visitor to read these files.
# They can just go download their own Drupal. It's
# free and everything.
RewriteRule ^(.*)CHANGELOG\.txt$ - [F]
RewriteRule ^(.*)INSTALL\.mysql\.txt$ - [F]
RewriteRule ^(.*)INSTALL\.txt$ - [F]
RewriteRule ^(.*)MAINTAINERS\.txt$ - [F]
RewriteRule ^(.*)INSTALL\.pgsql\.txt$ - [F]
RewriteRule ^(.*)LICENSE\.txt$ - [F]
RewriteRule ^(.*)UPGRADE\.txt$ - [F]
RewriteRule ^(.*)README\.txt$ - [F]
```
Put these lines in the bottom of the .htaccess file, but before the `</IfModule>` "tag". The .htaccess file lives in the root of your Drupal installation.

Using version control?
-------------

Metadata folders left by whatever version control system should be hidden too.
```
# Don't let people pry in version control folders
RewriteRule (^|/)(CVS|\.svn|\.git)/ - [F]
```
Put the above snippet inside the `</IfModule>` in .htaccess as well.
