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
let toRef = function(name) {
  // http://stackoverflow.com/questions/1983648/replace-space-with-dash-and-make-all-letters-lower-case-using-javascript
  return name.replace(/\s+/g, '-').toLowerCase();
}
hb.registerHelper('toRef', toRef);
hb.registerHelper('db', function(dbName){
  let db = databases[dbName];
  if (db == undefined) {
    console.error(dbName, 'is not defined!');
    return '';
  }
  return `
- [${dbName}](${toRef(db.url)}) ${db.description}
${_.map(db.links, (v, k)=> {
                return `  - [${k}](${v})`;
            }).join('\n')}
`
});
let tmpl = hb.compile(fs.readFileSync('README.tmpl', 'utf-8'));
// let out = Mustache.render(fs.readFileSync('README.mustache', 'utf-8'), data);
let out = tmpl(data);

console.log(out);

fs.writeFileSync('README.md', out);
