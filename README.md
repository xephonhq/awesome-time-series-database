<!-- NOTE: this md file is generated, please don't modify the file directly -->
# awesome-time-series-database
A curated list of awesome time series databases, benchmark tools, blog and published papers

## Contents

- [Time series databases](#time-series-databases)
  - [HBase](#hbase)
  - [Cassandra](#cassandra)
  - [Bigtable](#bigtable)
  - [Memoery](#memoery)
- [Monitoring solutions](#monitoring-solutions)

## Time series databases

NOTE: some databases have multiple backends, they are grouped by their default backend.

### HBase

#### Design

- [HBase in Action (Manning Publications) - Chapter 7: HBase by Example: OpenTSDB](http://www.manning.com/dimidukkhurana/)

#### Databases

- [OpenTSDB](http://opentsdb.net/) Classical time series database on top of HBase. Now support Cassandra and Bigtable.
  - Language: java
  - Backends: [HBase](#hbase)

### Cassandra

#### Design

- [Basic Time Series with Cassandra](http://www.rubyscale.com/post/143067470585/basic-time-series-with-cassandra)
- [Advanced Time Series with Cassandra](http://www.datastax.com/dev/blog/advanced-time-series-with-cassandra)

#### Databases

- [KairosDB](https://kairosdb.github.io/) Fast Time Series Database on Cassandra
  - Language: java
  - Backends: [Cassandra](#cassandra)
- [Heroic](https://spotify.github.io/heroic/) A scalable time series database based on Bigtable, Cassandra, and Elasticsearch
  - Language: java
  - Backends: [Cassandra](#cassandra), [HBase](#hbase), [Bigtable](#bigtable)
  - [Monitoring at Spotify - Introducing Heroic](https://labs.spotify.com/2015/11/17/monitoring-at-spotify-introducing-heroic/)

### Bigtable

#### Design

- [Cloud Bigtable Schema Design for Time Series Data](https://cloud.google.com/bigtable/docs/schema-design-time-series)

#### Databases

### Memoery

#### Design

- [Gorilla: A Fast, Scalable, In-Memory Time Series Database](http://www.vldb.org/pvldb/vol8/p1816-teller.pdf)

#### Databases

## Monitoring solutions

## License

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [Pinglei Guo](https://github.com/at15) has waived all copyright and related or neighboring rights to this work.
