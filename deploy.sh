#!/usr/bin/env sh
# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain, put your CNAME file here
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# Push to the gh-pages branch of your module11 repo
git push -f https://github.com/Renatolaska/module11.git main:gh-pages

cd -


