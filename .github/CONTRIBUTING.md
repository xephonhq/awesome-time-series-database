# Contribution Guidelines

This project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

Please read [README.dev.md](../README.dev.md) to know how to develop the website even if you're just trying to fix a typo
because README.md and web pages are all generated.

## DO NOT

- edit `README.md` directly, it is auto generated

## Adding databases

<!-- TODO: we need to distinguish PR and issue, people can add database in PR directly, and need to follow the schema -->

- use a clean title for you issue and PR, like `[add][database][InfluxDB]`
- provide valid link. (NOTE: some paper are not free to public, you can point it to the publisher instead of a PDF file,
  NEVER upload those files to public unless you are the author)
- modify `yml` if you want to add one more project or paper
- modify `handlebars` if you think there is a better layout
- generate the `md` file by running `node index.js`
- keep your commit small, so we can cherry pick if you have a big PR and we just want part of them
- rebase your branch if it has conflict due to other people's PR got merged before yours

NOTE: you need to install `Node.JS` and run `npm install` to generate the md file

## Modify the website

We use [Nuxt](https://github.com/nuxt/nuxt.js) for generating the static website

- have Node.js > 7.0 installed
- `npm install`
- run `npm run dev` and navigate to `http://localhost:3000`
- run `node index.js` to generate new json data file from yml files
- run `npm run generate` to generate the static website