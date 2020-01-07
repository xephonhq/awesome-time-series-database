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
  license: 'mit'
}

export { influxdb }