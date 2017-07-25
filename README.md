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
  - [Memory](#memory)
  - [HDD](#hdd)
  - [SSD](#ssd)
- [Reading](#reading)
- [Monitoring](#monitoring)

## Databases

### OpenTSDB

[OpenTSDB](http://opentsdb.net/) is a Classical time series database on top of HBase. Now support Cassandra and Bigtable.

- Language: Java
- Backends: [HBase](#hbase), [Bigtable](#bigtable), [Cassandra](#cassandra)

### KairosDB

[KairosDB](https://kairosdb.github.io/) is a Fast Time Series Database on Cassandra

- Language: Java
- Backends: [Cassandra](#cassandra)

### Heroic

[Heroic](https://spotify.github.io/heroic/) is a Scalable time series database based on Bigtable, Cassandra, and Elasticsearch

- Language: Java
- Backends: [Cassandra](#cassandra), [HBase](#hbase), [Bigtable](#bigtable), [Elasticsearch](#elasticsearch)
- [Monitoring at Spotify - Introducing Heroic](https://labs.spotify.com/2015/11/17/monitoring-at-spotify-introducing-heroic/)

### BTrDB

[BTrDB](http://btrdb.io/) (Berkeley Tree Database) is a High performance time series database designed to support high density data storage applications.

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
- Backends: [HDD](#hdd), [SSD](#ssd)
- Tags: LSM Tree
- [InfluxDB Markedly Outperforms OpenTSDB in Time-Series Data &amp; Metrics Benchmark](https://influxdata.com/influxdb-markedly-outperforms-opentsdb-in-time-series-data-metrics-benchmark/)

### Prometheus

[Prometheus](https://prometheus.io/) is a systems and service monitoring system and time series database featuring pull model, alert, graph etc.

- Language: Go
- Backends: [HDD](#hdd), [SSD](#ssd)
- [Scaling and Federating Prometheus](https://www.robustperception.io/scaling-and-federating-prometheus/)

### Beringei

[Beringei](https://github.com/facebookincubator/beringei) is a A high performance, in memory time series storage engine designed by Facebook

- Language: C++
- Backends: [Memory](#memory)

### Atlas

[Atlas](https://github.com/Netflix/atlas) is a In-memory dimensional time series database designed at Netflix

- Language: Scala
- Backends: [Memory](#memory)

### Khronus

[Khronus](https://github.com/Searchlight/khronus) is a distributed and reactive time series database designed to store, retrieve, analyze and process a large amount of Disk metrics

- Language: Scala
- Backends: [Cassandra](#cassandra)

### Hawkular Metrics

[Hawkular Metrics](https://github.com/hawkular/hawkular-metrics) is a storage engine for metric data using Cassandra

- Language: Java
- Backends: [Cassandra](#cassandra)

### Blueflood

[Blueflood](https://github.com/rackerlabs/blueflood) is a distributed system designed to ingest and process time series data built by rackspace

- Language: Java
- Backends: [Cassandra](#cassandra), [Elasticsearch](#elasticsearch)

### Newts

[Newts](https://github.com/OpenNMS/newts) is a a time-series data store support searching metadata

- Language: Java
- Backends: [Cassandra](#cassandra)

### Akumuli

[Akumuli](https://github.com/akumuli/Akumuli) is a a numeric time series database that can be used to capture, store and process time-series data in real-time.

- Language: C++
- Backends: [HDD](#hdd), [SSD](#ssd)
- Tags: LSM Tree
- [Akumuli Markedly Outperforms InfluxDB in Time-Series Data &amp; Metrics Benchmark](http://akumuli.org/akumuli/2017/01/24/benchmark/)

## Backends

### HBase

Databases: [OpenTSDB](#opentsdb), [Heroic](#heroic)

#### Design

- [HBase in Action (Manning Publications) - Chapter 7: HBase by Example: OpenTSDB](http://www.manning.com/dimidukkhurana/)

### Cassandra

Databases: [KairosDB](#kairosdb), [Heroic](#heroic), [OpenTSDB](#opentsdb), [Khronus](#khronus), [Hawkular Metrics](#hawkular-metrics), [Blueflood](#blueflood), [Newts](#newts)

#### Design

- [Basic Time Series with Cassandra (2012)](http://www.rubyscale.com/post/143067470585/basic-time-series-with-cassandra)
- [Advanced Time Series with Cassandra (2012)](http://www.datastax.com/dev/blog/advanced-time-series-with-cassandra)
- [Metric Collection and Storage with Cassandra (2012)](http://www.datastax.com/dev/blog/metric-collection-and-storage-with-cassandra)
- [Apache Cassandra for analytics: A performance and storage analysis (2016)](https://www.oreilly.com/ideas/apache-cassandra-for-analytics-a-performance-and-storage-analysis)

### Elasticsearch

Databases: [Heroic](#heroic), [Blueflood](#blueflood)

#### Design

- [Timelion: The time series composer for Kibana](https://www.elastic.co/blog/timelion-timeline)

### Bigtable

Databases: [Heroic](#heroic), [OpenTSDB](#opentsdb)

#### Design

- [Cloud Bigtable Schema Design for Time Series Data](https://cloud.google.com/bigtable/docs/schema-design-time-series)

### Ceph

Databases: [BTrDB](#btrdb), [Vaultaire](#vaultaire)

#### Design

### Memory

Databases: [Beringei](#beringei), [Atlas](#atlas)

#### Design

- [Gorilla: A Fast, Scalable, In-Memory Time Series Database](http://www.vldb.org/pvldb/vol8/p1816-teller.pdf)

### HDD

Databases: [InfluxDB](#influxdb), [Prometheus](#prometheus), [Akumuli](#akumuli)

#### Design

### SSD

Databases: [InfluxDB](#influxdb), [Prometheus](#prometheus), [Akumuli](#akumuli)

#### Design

## Reading

### Survey

- [In Search of Agile Time Series Database](https://taowen.gitbooks.io/tsdb/content/)

- [Survey on TSDBs that use Cassandra as backend](https://github.com/xephonhq/xephon-k/tree/master/survey)

### Database

## Monitoring

## Acknowlegement

- [awesome big data](https://github.com/onurakpolat/awesome-bigdata#time-series-databases)
- [List of Time Series Databases](https://misfra.me/2016/04/09/tsdb-list/) by [Preetam Jinka](https://twitter.com/PreetamJinka)
- [awesome db](https://github.com/numetriclabz/awesome-db)

## License

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [Pinglei Guo](https://github.com/at15) has waived all copyright and related or neighboring rights to this work.
