// TODO: add the following properties, status: active|maintained|dead,

let databaseSchema = [
  {
    name: 'status',
    type: 'value',
    values: [
      'active',
      'maintained',
      'dead'
    ]
  },
  {
    name: 'lang',
    type: 'value',
    values: [
      'c',
      'c++',
      'go',
      'java',
      'python',
      'rust',
    ]
  },
  {
    name: 'backend',
    type: 'array',
    values: [
      'bigtable',
      'cassandra',
      'elasticsearch',
      'hbase',
      'memory',
      'localfs',
      's3',
    ]
  },
  {
    name: 'license',
    type: 'value',
    values: [
      'apache-2.0',
      'gpl',
      'lgpl',
      'mit',
    ]
  }
]

let databases = [
  {
    name: 'kairosdb',
    displayName: 'KairosDB',
    status: 'active',
    lang: 'java',
    backend: [
      'cassandra'
    ],
    license: 'apache-2.0'
  },
  {
    name: 'opentsdb',
    displayName: 'OpenTSDB',
    status: 'active',
    lang: 'java',
    backend: [
      'hbase'
    ],
    license: 'lgpl'
  },
  {
    name: 'influxdb',
    displayName: 'InfluxDB',
    status: 'active',
    lang: 'go',
    backend: [
      'localfs'
    ],
    license: 'mit'
  },
  {
    name: 'heroic',
    displayName: 'Heroic',
    status: 'maintained',
    lang: 'java',
    backend: [
      'bigtable',
      'cassandra',
      'elasticsearch'
    ],
    license: 'apache-2.0'
  },
  {
    name: 'xephonk',
    displayName: 'XephonK',
    status: 'dead',
    lang: 'go',
    backend: [
      'cassandra',
      'localfs'
    ],
    license: 'mit'
  }
]

export { databaseSchema, databases }