// TODO: add the following properties, status: active|maintained|dead,

let databaseSchema = [
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
      'local',
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
    lang: 'java',
    backend: [
      'cassandra'
    ],
    license: 'apache-2.0'
  },
  {
    name: 'opentsdb',
    displayName: 'OpenTSDB',
    lang: 'java',
    backend: [
      'hbase'
    ],
    license: 'lgpl'
  },
  {
    name: 'influxdb',
    displayName: 'InfluxDB',
    lang: 'go',
    backend: [
      'local'
    ],
    license: 'mit'
  },
  {
    name: 'heroic',
    displayName: 'Heroic',
    lang: 'java',
    backend: [
      'bigtable',
      'cassandra',
      'elasticsearch'
    ],
    license: 'apache-2.0'
  }
]

export { databaseSchema, databases }