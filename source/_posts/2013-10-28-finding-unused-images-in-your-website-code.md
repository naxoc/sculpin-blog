---
title: "Finding unused images in your website code"
date: 2013-10-28 21:45
comments: true
tags:
- shell
- script
- images
- code
---
I was doing a lot of changes to CSS files today - mainly deleting a whole lot of stuff. I wanted to see if there were image files that were referenced by CSS that were no longer in use, so I wrote this naïve little script that loops through all image files it finds in the dir you give it to see if there are references to the image files.

If you have [The Silver Searcher](https://github.com/ggreer/the_silver_searcher) (ag) installed the script is much faster. Without Silver Searcher the script uses grep. If you don't know Silver Searcher go check it out - it is super fast.

``` sh
#!/bin/bash
DIR=.
if [ -n "$1" ]
then
  DIR=$1
fi

# Find image files in.
FILES=`find $DIR -type f | grep ".*\.\(jpg\|gif\|png\|jpeg\)"`

# Default searcher is grep. If Silver Searcher is installed, use that.
SEARCHER='grep -r -l '
if command -v ag
then
  # Sweet! Let's use Silver Searcher.
  SEARCHER='ag -l '
fi

# Loop over image files.
for f in $FILES
do
  if [[ -f $f ]]
  then
    name=$(basename $f)
    found=$($SEARCHER $name $DIR)
    if [[ -z $found ]]
    then
      echo $f
    fi
  fi
done
```
[Gist is here](https://gist.github.com/naxoc/7203765).

## How to use the script

1. Don't use windows.
2. Download the gist and put it somewhere in your project.
3. cd to the script in your command line and go `chmod u+x unused-images.sh`
4. Run the script by going `sh unused-images.sh` or `/.unused-images.sh`. If you pass a directory as an argument you will search in that dir only. If you don't pass an argument the script will search in the dir it is in, so be a little bit careful with doing that in a directory that contains thousands of files.

The script outputs the images that have no references. So if you feel courageous you can delete the unused image files by piping the output to xargs and delete:
```
./unused-images.sh themes | xargs rm
```
