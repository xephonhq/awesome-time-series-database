const backends = {
  HBase: {
    url: 'http://hbase.apache.org/',
    links: {'HBase in Action (Manning Publications) - Chapter 7: HBase by Example: OpenTSDB': 'http://www.manning.com/dimidukkhurana/'},
    databases: ['OpenTSDB', 'Heroic']
  },
  Cassandra: {
    url: 'http://cassandra.apache.org/',
    links: {
      'Basic Time Series with Cassandra (2012)': 'http://www.rubyscale.com/post/143067470585/basic-time-series-with-cassandra',
      'Advanced Time Series with Cassandra (2012)': 'http://www.datastax.com/dev/blog/advanced-time-series-with-cassandra',
      'Metric Collection and Storage with Cassandra (2012)': 'http://www.datastax.com/dev/blog/metric-collection-and-storage-with-cassandra',
      'Apache Cassandra for analytics: A performance and storage analysis (2016)': 'https://www.oreilly.com/ideas/apache-cassandra-for-analytics-a-performance-and-storage-analysis'
    },
    databases: ['KairosDB',
      'Heroic',
      'OpenTSDB',
      'Khronus',
      'Hawkular Metrics',
      'Blueflood',
      'Newts']
  },
  Elasticsearch: {
    url: 'https://www.elastic.co/',
    links: {'Timelion: The time series composer for Kibana': 'https://www.elastic.co/blog/timelion-timeline'},
    databases: ['Heroic', 'Blueflood']
  },
  Bigtable: {
    url: 'https://cloud.google.com/bigtable/',
    links: {'Cloud Bigtable Schema Design for Time Series Data': 'https://cloud.google.com/bigtable/docs/schema-design-time-series'},
    databases: ['Heroic', 'OpenTSDB']
  },
  Ceph: {url: 'http://ceph.com/', databases: ['BTrDB', 'Vaultaire']},
  Memory: {
    url: 'N/A',
    links: {'Gorilla: A Fast, Scalable, In-Memory Time Series Database': 'http://www.vldb.org/pvldb/vol8/p1816-teller.pdf'},
    databases: ['Beringei', 'Atlas']
  },
  Custom: {
    url: 'N/A',
    databases: ['InfluxDB', 'Prometheus', 'Akumuli']
  }
};

// export default backends;
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = backends;
