const hbase = require('./backend/hbase').default;
const cassandra = require('./backend/cassandra').default;

const backends = {
  HBase: hbase,
  Cassandra: cassandra,
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
