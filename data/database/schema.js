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
    name: 'protocol',
    type: 'array',
    values: [
      'prometheus',
      'http',
      'tcp',
      'udp'
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

export { databaseSchema }