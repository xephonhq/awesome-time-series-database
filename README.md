# awesome-time-series-database
A curated list of awesome time series databases, benchmark tools, blog and published papers

## Contents

- [Time series databases](#time-series-database)
  - [In Memory](#in-memory)
  - [Cassandra](#cassandra)
- [Monitoring solutions](#monitoring-solutions)

## Time series databases

NOTE: some databases have multiple backends, they are grouped by their default backend.

### In Memory

- [Gorilla](http://www.vldb.org/pvldb/vol8/p1816-teller.pdf) From Facebook, A closed source fast in memory time series database.
  - [Review of Gorilla by Adrian Colyer in the morning paper](https://blog.acolyer.org/2016/05/03/gorilla-a-fast-scalable-in-memory-time-series-database/)

### Cassandra

- [KairosDB](https://kairosdb.github.io/) Fast Time Series Database on Cassandra. Was a fork of OpenTSDB but choose Cassandra over HBase at last.
- [Heroic](https://spotify.github.io/heroic/) From [Spotify](https://github.com/spotify), A scalable time series database based on Bigtable, Cassandra, and Elasticsearch.

### HBase

- [OpenTSDB](http://opentsdb.net/) Classical time series database on top of HBase. Now support Cassandra and Bigtable. Detail documentation for time series beginners.

## Monitoring solutions

- [Bosun](https://github.com/bosun-monitor/bosun) Built by Stack Exchange, A time series alerting framework using [OpenTSDB](http://opentsdb.net/) with a [metrics collector](https://github.com/bosun-monitor/bosun/tree/master/cmd/scollector).

## License

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [Pinglei Guo](https://github.com/at15) has waived all copyright and related or neighboring rights to this work.
