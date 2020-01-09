let pinot = {
  name: 'pinot',
  displayName: 'Apache Pinot',
  website: 'https://pinot.apache.org/',
  github: 'https://github.com/apache/incubator-pinot',
  status: 'active',
  lang: 'java',
  backend: ['s3', 'hdfs', 'azdls'], // https://azure.microsoft.com/en-us/services/storage/data-lake-storage/
  protocol: ['http'],
  query: ['pql'], // https://pinot.readthedocs.io/en/latest/pql_examples.html
  license: 'apache-2.0',
  author: [
    'Jackie-Jiang'
  ],
  contributedBy: [
    'at15'
  ]
}

export { pinot }