#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

cd dist
git init
# git checkout -b main
git branch -m main

git add --a
git commit -m 'deploy'
git push -f https://github.com/Freya-Jheng/my-todos.git main:gh-pages

cd -
