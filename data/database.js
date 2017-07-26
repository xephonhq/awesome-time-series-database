const opentsdb = require('./database/opentsdb').default;
const kairosdb = require('./database/kairosdb').default;
const heroic = require('./database/heroic').default;
const btrdb = require('./database/btrdb').default;
const vaultaire = require('./database/vaultaire').default;
const influxdb = require('./database/influxdb').default;
const prometheus = require('./database/prometheus').default;
const beringei = require('./database/beringei').default;
const atlas = require('./database/atlas').default;
const khronus = require('./database/khronus').default;
const hawkular = require('./database/hawkular_metrics').default;
const blueflood = require('./database/blueflood').default;
const newts = require('./database/newts').default;
const akumuli = require('./database/akumuli').default;

const databases = {
  OpenTSDB: opentsdb,
  KairosDB: kairosdb,
  Heroic: heroic,
  BTrDB: btrdb,
  Vaultaire: vaultaire,
  InfluxDB: influxdb,
  Prometheus: prometheus,
  Beringei: beringei,
  Atlas: atlas,
  Khronus: khronus,
  HawkularMetrics: hawkular,
  Blueflood: blueflood,
  Newts: newts,
  Akumuli: akumuli
};

// export default databases;
// http://stackoverflow.com/questions/40294870/module-exports-vs-export-default-in-node-js-and-es6
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = databases;
