FROM node:alpine

RUN apk add git rsync make jq
RUN yarn global add vuepress
COPY hack/deploy.sh /deploy.sh

ENTRYPOINT ["/deploy.sh"]
