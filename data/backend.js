const hbase = require('./backend/hbase').default;
const cassandra = require('./backend/cassandra').default;
const elasticsearch = require('./backend/elasticsearch').default;
const bigtable = require('./backend/bigtable').default;
const ceph = require('./backend/ceph').default;
const memory = require('./backend/memory').default;
const hdd = require('./backend/hdd').default;
const ssd = require('./backend/ssd').default;

const backends = {
  HBase: hbase,
  Cassandra: cassandra,
  Elasticsearch: elasticsearch,
  Bigtable: bigtable,
  Ceph: ceph,
  Memory: memory,
  HDD: hdd,
  SSD: ssd
};

// export default backends;
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = backends;
