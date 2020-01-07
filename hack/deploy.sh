#!/bin/sh

set -e

echo "workspace $GITHUB_WORKSPACE repo $GITHUB_REPOSITORY"
echo "I am going to deploy to $BRANCH $1"
git status

# https://github.com/grasilife/github-pages-deploy-action/blob/master/entrypoint.sh#L63
REPO_PATH="https://x-access-token:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"

cd /tmp && git clone "${REPO_PATH}" tr && cd /tmp/tr && git checkout gh-pages

echo "deployed"