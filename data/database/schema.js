// TODO: add the following properties
// - logo url
// - data model
// - compression
// - format, row. column, b+, lsm ... (how to describe them ...
// - distributed
// - cloud provider, i.e. some host solution only runs on one platform
// - company, some are backed by startup (influxdb), some has people start a new startup from it (m3)

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
      'erlang',
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
      'dynamodb',
      'spark',
      'postgresql',
      'hdfs',
      'azdls', // https://azure.microsoft.com/en-us/services/storage/data-lake-storage/
      'solr',
      'mongodb',
      'accumulo', // bigtable like on HDFS https://accumulo.apache.org/docs/2.x/getting-started/design
      'leveldb'
    ]
  },
  {
    name: 'protocol',
    type: 'array',
    values: [
      'embed',
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
      'graphite',
      'promql',
      'influxql',
      'flux',
      'stack', // https://github.com/Netflix/atlas/wiki/Stack-Language
      'thrift',
      'pql', // https://pinot.readthedocs.io/en/latest/pql_examples.html
      'm3query', // http://m3db.github.io/m3/how_to/query/
      'python',
      'metricsql', // https://github.com/VictoriaMetrics/VictoriaMetrics/wiki/ExtendedPromQL
      'warpscript', // https://warp10.io/content/03_Documentation/04_WarpScript/01_Concepts
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
      'agpl-3.0',
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