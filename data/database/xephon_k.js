const XephonK = {
  name: 'Xephon-K',
  oss: true,
  license: 'MIT',
  owner: 'at15',
  github: 'https://github.com/xephonhq/xephon-k',
  website: 'https://github.com/xephonhq/xephon-k',
  description: 'A time series database with multiple backends',
  language: ['go'], // the first language is treated as main language, in lower case
  distributed: false,
  backends: ['local_disk'] // TODO: need to separate index and data storage ..., also need to document their detail usage, i.e cassandra schema
};

// TODO: what about InfluxDB enterprise

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = XephonK;
