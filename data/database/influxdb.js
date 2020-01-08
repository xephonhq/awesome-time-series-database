let influxdb = {
  name: 'influxdb',
  displayName: 'InfluxDB',
  website: 'https://www.influxdata.com/products/influxdb-overview/',
  github: 'https://github.com/influxdata/influxdb',
  status: 'active',
  lang: 'go',
  backend: [
    'localfs'
  ],
  protocol: [
    'http'
  ],
  query: [
    'influxql',
    'flux'
  ],
  license: 'mit',
  author: [
    'pauldix', // founder
    'benbjohnson', // author of boltdb
    'jwilder', // now at azure
    'otoolep', // now at google working on stack driver, http://www.philipotoole.com/resume/
  ],
  contributedBy: [
    'at15'
  ]
}

export { influxdb }