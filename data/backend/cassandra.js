const Cassandra = {
  name: 'Cassandra',
  url: 'http://cassandra.apache.org/',
  links: {
    'Basic Time Series with Cassandra (2012)': 'http://www.rubyscale.com/post/143067470585/basic-time-series-with-cassandra',
    'Advanced Time Series with Cassandra (2012)': 'http://www.datastax.com/dev/blog/advanced-time-series-with-cassandra',
    'Metric Collection and Storage with Cassandra (2012)': 'http://www.datastax.com/dev/blog/metric-collection-and-storage-with-cassandra',
    'Apache Cassandra for analytics: A performance and storage analysis (2016)': 'https://www.oreilly.com/ideas/apache-cassandra-for-analytics-a-performance-and-storage-analysis'
  },
  databases: [
    'KairosDB',
    'Heroic',
    'OpenTSDB',
    'Khronus',
    'Hawkular Metrics',
    'Blueflood',
    'Newts'
  ]
};

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = Cassandra;
