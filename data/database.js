const opentsdb = require('./database/opentsdb').default;
const kairosdb = require('./database/kairosdb').default;
const heroic = require('./database/heroic').default;
const btrdb = require('./database/btrdb').default;
const vaultaire = require('./database/vaultaire').default;

const databases = {
  OpenTSDB: opentsdb,
  KairosDB: kairosdb,
  Heroic: heroic,
  BTrDB: btrdb,
  Vaultaire: vaultaire,
  InfluxDB: {
    url: 'https://www.influxdata.com/time-series-platform/influxdb/',
    description: 'Scalable datastore for metrics, events, and real-time analytics https://influxdata.com',
    language: 'Go',
    backends: ['HDD', 'SSD'],
    tags: ['LSM Tree'],
    links: {'InfluxDB Markedly Outperforms OpenTSDB in Time-Series Data & Metrics Benchmark': 'https://influxdata.com/influxdb-markedly-outperforms-opentsdb-in-time-series-data-metrics-benchmark/'}
  },
  Prometheus: {
    url: 'https://prometheus.io/',
    description: 'systems and service monitoring system and time series database featuring pull model, alert, graph etc.',
    language: 'Go',
    backends: ['HDD', 'SSD'],
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
    description: 'distributed and reactive time series database designed to store, retrieve, analyze and process a large amount of Disk metrics',
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
    backends: ['HDD', 'SSD'],
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
