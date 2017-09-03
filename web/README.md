# Awesome TSDB website

The website is built using [nuxt.js](https://nuxtjs.org/) and [Semantic UI](https://semantic-ui.com/).
It is published in [gh-pages branch](https://github.com/xephonhq/awesome-time-series-database/tree/gh-pages).

## Edit

- you should not edit the gh-pages branch directly, those are auto generated html and js files
- [ ] TODO: detail about how to edit those `.vue` files

## Publish

- NOTE: we ust `nuxt.config.gh.js` to build content for gh pages, `nuxt.config.js` is for local dev
- `make publish` would build and commit in `/tmp/awesome-time-series-database`
- `git push origin gh-pages`