'use strict';

const fs = require('fs');
const _ = require('lodash');
const yaml = require('js-yaml');
const hb = require('handlebars');

// TODO: migrate code from https://github.com/tongquhq/about/blob/master/lib/config/parser.js to support $ref in yaml
const backends = yaml.safeLoad(fs.readFileSync('backend.yml','utf-8'));
const databases = yaml.safeLoad(fs.readFileSync('database.yml','utf-8'));

// console.log(backends);
// console.log(databases);

const data = {
  backends: backends,
  databases: databases
};

// Handlerbars helpers
let toRef = function(name) {
  // http://stackoverflow.com/questions/1983648/replace-space-with-dash-and-make-all-letters-lower-case-using-javascript
  return '#' + name.replace(/\s+/g, '-').toLowerCase();
}
hb.registerHelper('toRef', toRef);

// Render and writ to file
let tmpl = hb.compile(fs.readFileSync('README.handlebars', 'utf-8'));
// FIXME: the template gnerated extra line breaks
// http://stackoverflow.com/questions/10965433/regex-replace-multi-line-breaks-with-single-in-javascript
let out = tmpl(data).replace(/\n\s*\n\s*\n/g, '\n\n');



console.log(out);
fs.writeFileSync('README.md', out);
