// TODO: add the following properties
// - data model
// - compression
// - format, row. column, b+, lsm ... (how to describe them ...
// - cloud provider, i.e. some host solution only runs on one platform

// TODO: clean up md generator logic, we now have
// - md: false to exclude the column in readme
// - mdname: to use another name as generated md table header
// And we need things like [displayName](github) when formatting README

let databaseSchema = [
  {
    name: 'name',
    type: 'value',
    md: false,
  },
  {
    name: 'displayName',
    type: 'value',
    mdname: 'name',
  },
  {
    name: 'website',
    type: 'value',
    md: false,
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
      'haskell',
      'java',
      'python',
      'rust',
      'scala'
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
      'http',
      'tcp',
      'udp',
      'grpc',
      'thrift'
    ]
  },
  {
    name: 'query',
    type: 'array',
    values: [
      'sql',
      'text',
      'json',
      'promql',
      'influxql',
      'flux',
      'stack', // https://github.com/Netflix/atlas/wiki/Stack-Language
      'thrift',
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
      'bsd',
      'unknown'
    ]
  },
  {
    name: 'author',
    type: 'array',
    md: false,
  },
  {
    name: 'contributedBy',
    type: 'array',
    md: false
  }
]

export { databaseSchema }