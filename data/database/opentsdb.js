const OpenTSDB = {
  name: 'OpenTSDB',
  url: 'http://opentsdb.net/',
  description: 'Classical time series database on top of HBase. Now support Cassandra and Bigtable.',
  language: 'Java',
  backends: ['HBase', 'Bigtable', 'Cassandra']
};

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = OpenTSDB;
