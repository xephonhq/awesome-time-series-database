# sql.js

- SQLite compiled to JavaScript through Emscripten https://github.com/kripken/sql.js
- We use it to allow user run arbitrary SQL in browser (they will at most crash their own browser)
- We also export a valid sqlite3 database file, so it can be used by other application
  - [ ] TODO: might dump the SQL as well?

## Usage

````bash
npm install --save sql.js
````

- type `node` to enter Node.js shell

````js
var sql = require('sql.js');
var db = new sql.Database();
db.run('create table h (a int, b char);');
db.run("insert into h values (0, 'hello');");
var c = db.exec('select * from h');
c[0]; // { columns: [ 'a', 'b' ], values: [ [ 0, 'hello' ] ] }
var fs = require('fs');
var data = db.export();
var buffer = new Buffer(data);
fs.writeFileSync('h.sqlite', buffer);
````

- type `sqlite3` to enter sqlite shell

````
.open h.sqlite
.headers on
select * from h;
````
