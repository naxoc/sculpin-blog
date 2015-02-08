---
title: "Format json output from cUrl neatly"
date: 2013-11-22 14:27
comments: true
tags:
- curl
- webservice
- json
- cli

---
Here is a short simple tip to read json output from curl in a neat formatted way:

Pipe the output to Python like this:
```
curl "http://url.to.call?args=hi" | python -mjson.tool
```

This will prettify the output and make json much more readable when testing webservices. It also validates the json, so if it contains errors you will get a warning.

It works with Python 2.6 and higher and you can find more info at the [Python docs page](http://docs.python.org/2/library/json.html).
