// TODO: add the following properties
// - cloud provider, i.e. some host solution only runs on one platform

let databaseSchema = [
  {
    name: 'name',
    type: 'value'
  },
  {
    name: 'displayName',
    type: 'value'
  },
  {
    name: 'website',
    type: 'value'
  },
  {
    name: 'github',
    type: 'value'
  },
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
      'ceph',
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
      'grpc',
      'http',
      'tcp',
      'udp'
    ]
  },
  {
    name: 'query',
    type: 'array',
    values: [
      'sql',
      'json',
      'promql',
      'influxql',
      'flux'
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