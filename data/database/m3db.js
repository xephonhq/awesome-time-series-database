let m3db = {
  name: 'm3db',
  displayName: 'M3',
  website: 'https://www.m3db.io/',
  github: 'https://github.com/m3db/m3',
  status: 'active',
  lang: 'go',
  backend: ['localfs'],
  protocol: ['http'],
  query: [
    'promql',
    'graphite',
    'm3query', // http://m3db.github.io/m3/how_to/query/
    'sql' // TODO: seems sql is not in open source m3? but https://chronosphere.io/product has it?
  ],
  license: 'apache-2.0',
  author: [
    'xichen2020', // used to be top contributor ...
    'robskillington', // now at https://chronosphere.io/
    'schallert', // now at https://chronosphere.io/
    'richardartoul', // wrote tsdb-layer (using foundation db)
  ],
  contributedBy: [
    'at15'
  ]
}

export { m3db }