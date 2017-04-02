const databases = {
  OpenTSDB: {
    url: 'http://opentsdb.net/',
    description: 'Classical time series database on top of HBase. Now support Cassandra and Bigtable.',
    language: 'Java',
    backends: ['HBase', 'Bigtable', 'Cassandra']
  },
  KairosDB: {
    url: 'https://kairosdb.github.io/',
    description: 'Fast Time Series Database on Cassandra',
    language: 'Java',
    backends: ['Cassandra']
  },
  Heroic: {
    url: 'https://spotify.github.io/heroic/',
    description: 'Scalable time series database based on Bigtable, Cassandra, and Elasticsearch',
    language: 'Java',
    backends: ['Cassandra', 'HBase', 'Bigtable', 'Elasticsearch'],
    links: {'Monitoring at Spotify - Introducing Heroic': 'https://labs.spotify.com/2015/11/17/monitoring-at-spotify-introducing-heroic/'}
  },
  BTrDB: {
    url: 'https://github.com/SoftwareDefinedBuildings/btrdb',
    aka: 'Berkeley Tree Database',
    description: 'High performance time series database designed to support high density data storage applications.',
    language: 'Go',
    backends: ['Ceph'],
    links: {'BTrDB: Optimizing Storage System Design for Timeseries Processing': 'https://www.usenix.org/system/files/conference/fast16/fast16-papers-andersen.pdf'}
  },
  Vaultaire: {
    url: 'https://github.com/afcowie/vaultaire',
    description: 'data vault for system metrics, backed onto Ceph',
    language: 'Haskell',
    backends: ['Ceph'],
    links: {'Design and compare vaulataire with other time series database': 'http://www.anchor.com.au/blog/2014/06/vaultaire-ceph-based-immutable-tsdb/'}
  },
  InfluxDB: {
    url: 'https://www.influxdata.com/time-series-platform/influxdb/',
    description: 'Scalable datastore for metrics, events, and real-time analytics https://influxdata.com',
    language: 'Go',
    backends: ['Custom'],
    tags: ['LSM Tree'],
    links: {'InfluxDB Markedly Outperforms OpenTSDB in Time-Series Data & Metrics Benchmark': 'https://influxdata.com/influxdb-markedly-outperforms-opentsdb-in-time-series-data-metrics-benchmark/'}
  },
  Prometheus: {
    url: 'https://prometheus.io/',
    description: 'systems and service monitoring system and time series database featuring pull model, alert, graph etc.',
    language: 'Go',
    backends: ['Custom'],
    links: {'Scaling and Federating Prometheus': 'https://www.robustperception.io/scaling-and-federating-prometheus/'}
  },
  Beringei: {
    url: 'https://github.com/facebookincubator/beringei',
    description: 'A high performance, in memory time series storage engine designed by Facebook',
    language: 'C++',
    backends: ['Memory']
  },
  Atlas: {
    url: 'https://github.com/Netflix/atlas',
    description: 'In-memory dimensional time series database designed at Netflix',
    language: 'Scala',
    backends: ['Memory']
  },
  Khronus: {
    url: 'https://github.com/Searchlight/khronus',
    description: 'distributed and reactive time series database designed to store, retrieve, analyze and process a large amount of custom metrics',
    language: 'Scala',
    backends: ['Cassandra']
  },
  'Hawkular Metrics': {
    url: 'https://github.com/hawkular/hawkular-metrics',
    description: 'storage engine for metric data using Cassandra',
    language: 'Java',
    backends: ['Cassandra']
  },
  Blueflood: {
    url: 'https://github.com/rackerlabs/blueflood',
    description: 'distributed system designed to ingest and process time series data built by rackspace',
    language: 'Java',
    backends: ['Cassandra', 'Elasticsearch']
  },
  Newts: {
    url: 'https://github.com/OpenNMS/newts',
    description: 'a time-series data store support searching metadata',
    language: 'Java',
    backends: ['Cassandra']
  },
  Akumuli: {
    url: 'https://github.com/akumuli/Akumuli',
    description: 'a numeric time series database that can be used to capture, store and process time-series data in real-time.',
    language: 'C++',
    backends: ['Custom'],
    tags: ['LSM Tree'],
    links: {'Akumuli Markedly Outperforms InfluxDB in Time-Series Data & Metrics Benchmark': 'http://akumuli.org/akumuli/2017/01/24/benchmark/'}
  }
};

// export default databases;
// http://stackoverflow.com/questions/40294870/module-exports-vs-export-default-in-node-js-and-es6
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = databases;
