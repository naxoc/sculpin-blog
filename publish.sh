#!/bin/bash

# Compile the sass in the "theme".
pushd pure
sass=$(gulp sass | grep gulp-sass)
if [ -n "$sass" ]; then echo "ERROR: SASS could not be compiled"; exit 1; fi
popd

sculpin generate --env=prod
if [ $? -ne 0 ]; then echo "Could not generate the site"; exit 1; fi

# Add a version file to the "deployment".
echo "Deployed: $(date)
$(git log -1 --pretty=format:'%s (%ci)' --abbrev-commit)

https://github.com/naxoc/sculpin-blog/commit/$(git rev-parse HEAD)" > output_prod/VERSION.txt

# "almond" is set up in my .ssh/config.
rsync -avz output_prod/ almond:/var/www/html/naxoc.net
if [ $? -ne 0 ]; then echo "Could not publish the site"; exit 1; fi

# Remove the local "deployment" file.
rm output_prod/VERSION.txt
