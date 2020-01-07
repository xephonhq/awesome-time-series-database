FROM node:alpine

RUN yarn global add vuepress
COPY hack/deploy.sh /deploy.sh

ENTRYPOINT ["/deploy.sh"]
