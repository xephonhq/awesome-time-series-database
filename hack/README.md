# Hack awesome time series database

## TODO

- [ ] `make fmt`, webstorm format is different from prettier?
- [ ] add pending databases
- [ ] update url based on query filter
- [ ] don't show dead database (or split them in both front page and generated readme)
  - [ ] close [#77](https://github.com/xephonhq/awesome-time-series-database/issues/77)
- [ ] clean up issue template
- [ ] support paper and benchmarks
- [ ] separate github action to its own repo

Done

- [x] support filter in array e.g. backends

## Commands

You need to have nodejs and yarn installed.

```bash
# run the website locally
yarn docs:dev
# check data
make check
# generate README.md
make generate
```

## Naming

- use `alllowercase` to reduce typo, e.g. `influxdb`, `cassandra`, `xephonk`
- license names comes from https://choosealicense.com/licenses/

## Schema

NOTE: format markdown table using http://markdowntable.com/

Database

| name          | desc                                                                          |
|---------------|-------------------------------------------------------------------------------|
| name          | unique name in lowercase, used as id                                          |
| displayName   | official name                                                                 |
| website       |                                                                               |
| github        | open source code (if any)                                                     |
| status        | is the project dead or alive                                                  |
| lang          | programming language(s)                                                       |
| backend       | storage layer of database, other db, local fs, object store                   |
| protocol      | wire protocol format and transportation                                       |
| query         | query language                                                                |
| license       |                                                                               |
| author        | list of people started/working on this database, using github handler         |
| contributedBy | github handler for people adding the database to the list or writing about it |

## Check

- for nodejs to use es6 import, import need to have `.js` suffix
- top-level `package.json` will error when there is `"type": "json"` so we have a separated [data/package.json](data/package.json)

## Deploy

The website is deployed in both gh-pages and netlify.
Netlify has vuepress support out of box while gh-pages requires manual build.

- [GitHub Pages](https://xephonhq.github.io/awesome-time-series-database/)
- [Netlify](https://awesome-time-series-database.netlify.com/)

### Deploy using GitHub Action

We wrote an [action](../action.yml) to run a [custom docker](../Dockerfile) container and [push to gh-pages branch](deploy.sh).

- [x] https://github.com/xephonhq/awesome-time-series-database/issues/72
  - https://xephonhq.github.io/awesome-time-series-database is still outdated
  - https://github.com/grasilife/github-pages-deploy-action
  - https://github.com/ad-m/github-push-action
  - https://github.com/peaceiris/actions-gh-pages#getting-started
  - https://github.community/t5/GitHub-Actions/Github-action-not-triggering-gh-pages-upon-push/m-p/26869/highlight/true#M301
  
## How to

### Add a Database

- Create a new `databasename.js` in [data/databases](../data/database)
- Import and append to list in [data/databases/index.js](../data/database/index.js)
- Update [data/databases/schema.js](../data/database/schema.js) if you updated filter options like backend, protocol, language etc.
- Create a new `databasename.md` in [docs/database](../docs/database)
- `make check`
- `make generate`
- `make dev` and check if the website is working properly