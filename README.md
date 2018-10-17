# Blog built with Sculpin

This is my blog. The built output can be seen on [naxoc.net](http://naxoc.net). It uses Gulp for the theme because I wanted to play around with that (the folder called pure is the 'theme').

### To install:
[Install Sculpin](https://sculpin.io/getstarted/) - then run:

```
composer install
cd pure
npm install
npm run compile
```

### To work on the blog
In the root directory:
```
sculpin generate --watch --server
```

In the pure directory:
```
npm run develop
```

The blog will be available locally on your machine at [http://localhost:3000](http://localhost:3000) - or check the output from Gulp to se urls.

### To deploy
Modify the file called publish.sh and have it rsync your output files to your server.
