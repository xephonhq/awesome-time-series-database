#!/bin/sh -l

set -e

echo "workspace $GITHUB_WORKSPACE repo $GITHUB_REPOSITORY"
echo "arg is $1"

# Build
git status
make build
DIST_PATH="$(pwd)/docs/.vuepress/dist/"

# Config deploy key, we can't use GITHUB_TOKEN because it won't trigger gh-pages build
# https://github.com/peaceiris/actions-gh-pages/blob/master/entrypoint.sh#L37
SSH_DIR="/root/.ssh"
mkdir "${SSH_DIR}"
ssh-keyscan -t rsa github.com > "${SSH_DIR}/known_hosts"
echo "${ACTIONS_DEPLOY_KEY}" > "${SSH_DIR}/id_rsa"
chmod 400 "${SSH_DIR}/id_rsa"

# Clone gh-pages
REPO_PATH="git@github.com/${GITHUB_REPOSITORY}.git"
# https://github.com/grasilife/github-pages-deploy-action/blob/master/entrypoint.sh#L63
#REPO_PATH="https://x-access-token:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"
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
git commit -m "Deploy from ${GITHUB_SHA}"
# https://github.com/ad-m/github-push-action/blob/master/start.sh#L29
git push "${REPO_PATH}" "HEAD:gh-pages"

echo "deployed"