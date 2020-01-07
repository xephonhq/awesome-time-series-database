#!/bin/sh -l

set -e

echo "workspace $GITHUB_WORKSPACE repo $GITHUB_REPOSITORY"
echo "I am going to deploy to $BRANCH $1"
git status
make build
DIST_PATH="$(pwd)/docs/.vuepress/dist/"

# https://github.com/grasilife/github-pages-deploy-action/blob/master/entrypoint.sh#L63
REPO_PATH="https://x-access-token:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"

cd /tmp && git clone "${REPO_PATH}" repo
cd /tmp/repo && git checkout gh-pages && git status
# https://stackoverflow.com/questions/23698183/how-to-force-cp-to-overwrite-directory-instead-of-creating-another-one-inside
rsync -avh "${DIST_PATH}" /tmp/repo/
git status

echo "deployed"