let crate = {
  name: 'crate',
  displayName: 'CrateDB',
  website: 'https://crate.io/',
  github: 'https://github.com/crate/crate',
  status: 'active',
  lang: 'java',
  backend: ['elasticsearch', 's3'], // TODO: might put lucene as a backend? ...
  protocol: ['tcp'],
  query: ['sql'],
  license: 'apache-2.0',
  author: [
    'mfussenegger',
    'seut'
  ],
  contributedBy: [
    'at15'
  ]
}

export { crate }