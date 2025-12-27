‼️ This is no longer in use. I migrated to Hugo because I lost my will to live trying to get npm and composer updated on this project. The new reop can be found here: https://github.com/naxoc/naxoc-hugo

# Blog built with Sculpin

This is my blog. The built output can be seen on [naxoc.net](http://naxoc.net). It uses Gulp for the theme because I wanted to play around with that (the folder called pure is the 'theme').

### To install:
Make sure you have Composer and npm installed and then run:

```
composer install
cd pure
npm install
npm run compile
```

### To work on the blog
In the root directory:
```
vendor/bin/sculpin generate --watch --server
```

In the pure directory:
```
npm run watch
```

The blog will be available locally on your machine at [http://localhost:3000](http://localhost:3000) - or check the output from Gulp to se urls.

### To deploy
Modify the file called publish.sh and have it rsync your output files to your server.
