'use strict';

const fs = require('fs');
const yaml = require('js-yaml');

// TODO: migrate code from https://github.com/tongquhq/about/blob/master/lib/config/parser.js to support $ref in yaml

const backend = yaml.safeLoad(fs.readFileSync('backend.yml','utf-8'));

console.log(backend);
