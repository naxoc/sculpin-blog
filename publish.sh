#!/bin/bash -e

# Compile the sass in the "theme".
cd pure
npm run compile
cd -

# Not sure if Sculpin does this by itself before a generate to prod, but better
# safe than sorry.
rm -fr output_prod

vendor/bin/sculpin generate --env=prod
if [ $? -ne 0 ]; then echo "Could not generate the site"; exit 1; fi

# Add a version file to the "deployment".
echo "Deployed: $(date)
$(git log -1 --pretty=format:'%s (%ci)' --abbrev-commit)

https://github.com/naxoc/sculpin-blog/commit/$(git rev-parse HEAD)" > output_prod/VERSION.txt

# "almond" is set up in my .ssh/config.
rsync -avz --delete output_prod/ almond:/var/www/naxoc.net
if [ $? -ne 0 ]; then echo "Could not publish the site"; exit 1; fi

# Remove the local "deployment" file.
rm output_prod/VERSION.txt
