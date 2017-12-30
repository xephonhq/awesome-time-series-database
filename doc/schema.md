# Schema

## Questions we want to ask

- count of database writing in Java
- databases that has java client library

## current

meta.js

- tags: LSM Tree, B Tree
- languages: C, C++, Go, Haskell, Java, Scala
- backends: memory, hdd, ssd, bigtable, ceph, cassandra, elasticsearch, hbase
  - lack HDFS, PgSQL, MySQL

backend/*.js

- name, url, databases

database/*.js

- name, github, url, description, language, backends, tags, links

## core

database

- [ ] TODO: might look at some slides for SQL ...

## Reference

### dbdb.io

- system architecture: shared-nothing, shared-memory, shared-everything, shared-disk
- query interface: custom API, SQL, PL/SQL, SQL/DDL, SQL/DML
- data model: key/value, column family, relational, document/XML, other
- storage model: N-ary Storage Model, Decomposition Storage Model, Hybrid, Custom
- storage architecture: Disk-Oriented, In-Memory, Hybrid
- concurrency control: not supported, 2 PC (Deadlock Prevention/Detection), OCC, MVCC, Timestamp Ordering, Deterministic Concurrency Control
- isolation levels: not supported, serializable, read committed, read uncommitted, snapshot, repeatable read
- indexes: bitmap, hash table, skip list, b+ tree, r tree, bw tree, other
- foreign keys: support, not
- logging: ? physical, logical, command
- checkpoints: not, blocking, non-blocking, consistent, fuzzy
- views: not, materialized, virtual
- query execution: tuple at a time, vectorized, materialized, custom, not
- stored procedures: support, not
- joins: not, nested loop, hash, sort merge, broadcast, semi, limited, shuffle
- query compilation: not, code gen, JIT, stored procedure compilation 