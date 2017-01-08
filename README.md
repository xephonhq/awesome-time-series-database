<!-- NOTE: this md file is generated, please don't modify the file directly -->
# Awesome time-series database [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
A curated list of awesome time series databases, benchmark tools, blog and published papers

## Contents

- [Databases](#databases)
- [Backends](#backends)
  - [HBase](#hbase)
  - [Cassandra](#cassandra)
  - [Elasticsearch](#elasticsearch)
  - [Bigtable](#bigtable)
  - [Ceph](#ceph)
  - [Memoery](#memoery)
  - [Custom](#custom)
- [Reading](#reading)
- [Monitoring](#monitoring)

## Databases

### OpenTSDB

[OpenTSDB](http://opentsdb.net/) is a Classical time series database on top of HBase. Now support Cassandra and Bigtable.

- Language: java
- Backends: [HBase](#hbase)

### KairosDB

[KairosDB](https://kairosdb.github.io/) is a Fast Time Series Database on Cassandra

- Language: java
- Backends: [Cassandra](#cassandra)

### Heroic

[Heroic](https://spotify.github.io/heroic/) is a Scalable time series database based on Bigtable, Cassandra, and Elasticsearch

- Language: java
- Backends: [Cassandra](#cassandra), [HBase](#hbase), [Bigtable](#bigtable)
- [Monitoring at Spotify - Introducing Heroic](https://labs.spotify.com/2015/11/17/monitoring-at-spotify-introducing-heroic/)

### BTrDB

[BTrDB](https://github.com/SoftwareDefinedBuildings/btrdb) (Berkeley Tree Database) is a High performance time series database designed to support high density data storage applications.

- Language: Go
- Backends: [Ceph](#ceph)
- [BTrDB: Optimizing Storage System Design for Timeseries Processing](https://www.usenix.org/system/files/conference/fast16/fast16-papers-andersen.pdf)

### Vaultaire

[Vaultaire](https://github.com/afcowie/vaultaire) is a data vault for system metrics, backed onto Ceph

- Language: Haskell
- Backends: [Ceph](#ceph)
- [Design and compare vaulataire with other time series database](http://www.anchor.com.au/blog/2014/06/vaultaire-ceph-based-immutable-tsdb/)

### InfluxDB

[InfluxDB](https://www.influxdata.com/time-series-platform/influxdb/) is a Scalable datastore for metrics, events, and real-time analytics https://influxdata.com

- Language: Go
- Backends: [Custom](#custom)

### Beringei

[Beringei](https://github.com/facebookincubator/beringei) is a A high performance, in memory time series storage engine

- Language: C++
- Backends: [Memory](#memory)

## Backends

### HBase

Databases: [OpenTSDB](#opentsdb)

#### Design

- [HBase in Action (Manning Publications) - Chapter 7: HBase by Example: OpenTSDB](http://www.manning.com/dimidukkhurana/)

### Cassandra

Databases: [KairosDB](#kairosdb), [Heroic](#heroic)

#### Design

- [Basic Time Series with Cassandra](http://www.rubyscale.com/post/143067470585/basic-time-series-with-cassandra)
- [Advanced Time Series with Cassandra](http://www.datastax.com/dev/blog/advanced-time-series-with-cassandra)

### Elasticsearch

Databases: 

#### Design

- [Timelion: The time series composer for Kibana](https://www.elastic.co/blog/timelion-timeline)

### Bigtable

Databases: 

#### Design

- [Cloud Bigtable Schema Design for Time Series Data](https://cloud.google.com/bigtable/docs/schema-design-time-series)

### Ceph

Databases: [BTrDB](#btrdb), [Vaultaire](#vaultaire)

#### Design

### Memoery

Databases: [Beringei](#beringei)

#### Design

- [Gorilla: A Fast, Scalable, In-Memory Time Series Database](http://www.vldb.org/pvldb/vol8/p1816-teller.pdf)

### Custom

Databases: [InfluxDB](#influxdb)

#### Design

## Reading

### Survey

- [In Search of Agile Time Series Database](https://taowen.gitbooks.io/tsdb/content/)

### Database

## Monitoring

## Acknowlegement

- [awesome big data](https://github.com/onurakpolat/awesome-bigdata#time-series-databases)
- [awesome db](https://github.com/numetriclabz/awesome-db)

## License

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [Pinglei Guo](https://github.com/at15) has waived all copyright and related or neighboring rights to this work.
