#!/bin/sh -l

set -e

echo "workspace $GITHUB_WORKSPACE repo $GITHUB_REPOSITORY"
echo "arg is $1"

# Build
git status
make build
DIST_PATH="$(pwd)/docs/.vuepress/dist/"

# Clone gh-pages
# https://github.com/grasilife/github-pages-deploy-action/blob/master/entrypoint.sh#L63
REPO_PATH="https://x-access-token:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"
cd /tmp && git clone "${REPO_PATH}" repo
cd /tmp/repo && git checkout gh-pages && git status

# Sync build
# https://stackoverflow.com/questions/23698183/how-to-force-cp-to-overwrite-directory-instead-of-creating-another-one-inside
# NOTE: we can't --delete because we need to keep .git
rsync -avh "${DIST_PATH}" /tmp/repo/
git status

# Commit and push
COMMIT_EMAIL=$(jq '.pusher.email' "${GITHUB_EVENT_PATH}")
COMMIT_NAME=$(jq '.pusher.name' "${GITHUB_EVENT_PATH}")
git config user.email "${COMMIT_EMAIL}"
git config user.name "${COMMIT_NAME}"
git add -A .
git commit -m "Deplo from ${GITHUB_SHA}"
git push "${REPO_PATH}:gh-pages"

echo "deployed"