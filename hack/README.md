# Hack awesome time series database

## TODO

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
- license names are based on https://choosealicense.com/licenses/

## Schema

NOTE: format markdown table using http://markdowntable.com/

Database

| name        | desc                                                        |
|-------------|-------------------------------------------------------------|
| name        | unique name in lowercase, used as id                        |
| displayName | official name                                               |
| website     |                                                             |
| github      | open source code (if any)                                   |
| status      | is the project dead or alive                                |
| lang        | programming language(s)                                     |
| backend     | storage layer of database, other db, local fs, object store |
| protocol    | wire protocol format and transportation                     |
| query       | query language                                              |
| license     |                                                             |


## Check

- for nodejs to use es6 import, import need to have `.js` suffix
- top level `package.json` will error when there is `"type": "json"` so we have a separated [data/package.json](data/package.json)