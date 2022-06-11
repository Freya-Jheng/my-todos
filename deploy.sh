#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

cd dist
git init
git checkout -b main
git branch -A main

git add -A
git commit -m 'deploy'
git push -f https://github.com/Freya-Jheng/my-todos-vue.git main:gh-pages

cd -
