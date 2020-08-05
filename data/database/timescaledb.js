let timescaldb = {
  name: 'timescaledb',
  displayName: 'TimescaleDB',
  website: 'https://www.timescale.com/',
  github: 'https://github.com/timescale/timescaledb',
  status: 'active',
  lang: 'c',
  backend: ['postgresql'],
  // TODO: rethink what we should put for protocol
  protocol: ['postgres'],
  query: ['sql'],
  license: 'apache-2.0', // TODO: it's dual licensed ... the tsl folder is licensed under its own license https://github.com/timescale/timescaledb/blob/master/LICENSE
  author: [
    'cevian', // also from princeton, student of the co-founder
    'mfreed', // co-founder
    'akulkarni', // co-founder
  ],
  contributedBy: [
    'deniszh', // https://www.complexity.engineer/2017/03/tsdb-on-postgresql-but-why.html
    'at15'
  ]
}

export { timescaldb }