# Blog built with Sculpin

This is my blog. The built output can be seen on [naxoc.net](http://naxoc.net). It uses Gulp for the theme because I wanted to play around with that (the folder called pure is the 'theme').

### To install:
[Install Sculpin](https://sculpin.io/getstarted/)

```
sculpin install
cd pure
npm install
```

### To work on the blog
In the root directory:
```
sculpin generate --watch --server
```

In the pure directory:
```
gulp
```

The blog will be available locally on your machine at [http://localhost:3000](http://localhost:3000) - or check the output from Gulp to se urls.
