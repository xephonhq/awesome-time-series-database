const BTrDB = {
  name: 'BTrDB',
  github: 'https://github.com/SoftwareDefinedBuildings/btrdb',
  url: 'http://btrdb.io/',
  // TODO: alias of db name is not handled
  aka: 'Berkeley Tree Database',
  description: 'High performance time series database designed to support high density data storage applications.',
  language: 'Go',
  backends: ['Ceph'],
  // TODO: paper should have extra information, maybe a publication tag
  links: {'BTrDB: Optimizing Storage System Design for Timeseries Processing': 'https://www.usenix.org/system/files/conference/fast16/fast16-papers-andersen.pdf'}
};

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = BTrDB;
