'use strict';

const fs = require('fs');
const _ = require('lodash');
const yaml = require('js-yaml');
const hb = require('handlebars');

// TODO: migrate code from https://github.com/tongquhq/about/blob/master/lib/config/parser.js to support $ref in yaml

const backends = yaml.safeLoad(fs.readFileSync('backend.yml','utf-8'));
const databases = yaml.safeLoad(fs.readFileSync('database.yml','utf-8'));


console.log(backends);
const data = {
  backends: backends,
  databases: databases
};
let tmpl = hb.compile(fs.readFileSync('README.tmpl', 'utf-8'));
// let out = Mustache.render(fs.readFileSync('README.mustache', 'utf-8'), data);
let out = tmpl(data);

console.log(out);

// toc, use es6 template like https://github.com/tongquhq/about/blob/master/lib/cli/command.js
// let toc = `
//
// - [Time series databases](#time-series-database)
// ${_.map(backends, (v, k)=> {
//   // TODO: may need to change the link to dash-case
//                 return `  - [${k}](#${k})`;
//             }).join('\n')}
// `;
//
// console.log(toc);

// let databasesContent = `
// ## Time series databases
//
// NOTE: some databases have multiple backends, they are grouped by their default backend.
//
// ${_.map(backends, (v, k)=> {
//                 return `### ${k}
// ${_.map(v.databases, (v, k) => {
//                 return `- [${v}]`;
// })}
// `;
//             }).join('\n')}
// `
//
// console.log(databasesContent);
