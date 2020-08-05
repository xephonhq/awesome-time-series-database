# Awesome time series database

[![Build Status](https://travis-ci.org/xephonhq/awesome-time-series-database.svg?branch=master)](https://travis-ci.org/xephonhq/awesome-time-series-database)
[![Netlify Status](https://api.netlify.com/api/v1/badges/2ea12ac4-c2b9-4767-87d6-8ac65ce5ee30/deploy-status)](https://app.netlify.com/sites/awesome-time-series-database/deploys)

A curated list of time series databases.
For filtering based on language, backend etc. Check out the [website](https://awesome-time-series-database.netlify.com/)

<!--DBTABLE_START-->
|name|github|status|lang|backend|protocol|query|license|
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
|Akumuli|https://github.com/akumuli/Akumuli|maintained|c++|localfs|tcp|text|apache-2.0|
|Arctic|https://github.com/man-group/arctic|active|python|mongodb|tcp|python|lgpl|
|Argus|https://github.com/salesforce/Argus|dead|java|hbase|http|json|bsd|
|Atlas|https://github.com/Netflix/atlas|maintained|scala|memory|http|stack|apache-2.0|
|Beringei|https://github.com/facebookarchive/beringei|dead|c++|memory|thrift|thrift|bsd|
|BigGraphite|https://github.com/criteo/biggraphite|maintained|python|cassandra|http|graphite|apache-2.0|
|Blueflood|https://github.com/rackerlabs/blueflood|dead|java|cassandra,elasticsearch|http|json|apache-2.0|
|BTrDB|https://github.com/BTrDB/btrdb-server|maintained|go|ceph|http|json|gpl|
|Catena|https://github.com/Cistern/catena|dead|go|localfs|http|json|bsd|
|Chronix|https://github.com/ChronixDB/chronix.server|maintained|java|solr|http|json|apache-2.0|
|Citus|https://github.com/citusdata/citus|active|c|postgresql|tcp|sql|agpl-3.0|
|ClickHouse|https://github.com/ClickHouse/ClickHouse|active|c++|localfs|tcp|sql|apache-2.0|
|Cortex|https://github.com/cortexproject/cortex|active|go|s3,cassandra,bigtable,dynamodb|http|promql|apache-2.0|
|CrateDB|https://github.com/crate/crate|active|java|elasticsearch,s3|tcp|sql|apache-2.0|
|DalmatinerDB|https://github.com/dalmatinerdb/dalmatinerdb|maintained|erlang|localfs|http|text|mit|
|Flint|https://github.com/twosigma/flint|maintained|scala|spark|http|json|apache-2.0|
|Gnocchi|https://github.com/gnocchixyz/gnocchi|dead|python|localfs|http|json|apache-2.0|
|HawkularMertics|https://github.com/hawkular/hawkular-metrics|maintained|java|cassandra|http|json|apache-2.0|
|Heroic|https://github.com/spotify/heroic|maintained|java|bigtable,cassandra,elasticsearch|http|json|apache-2.0|
|InfluxDB|https://github.com/influxdata/influxdb|active|go|localfs|http|influxql,flux|mit|
|IRONdb|https://www.circonus.com/solutions/time-series-database/|active|c|localfs|http|json|proprietary|
|KairosDB|https://github.com/kairosdb/kairosdb|maintained|java|cassandra|http|json|apache-2.0|
|Khronus|https://github.com/khronus/khronus|dead|scala|cassandra|http|json,influxql|apache-2.0|
|LinDB|https://github.com/lindb/lindb|active|go|localfs|http|sql|apache-2.0|
|M3|https://github.com/m3db/m3|active|go|localfs|http|promql,graphite,m3query,sql|apache-2.0|
|Metrictank|https://github.com/grafana/metrictank|active|go|cassandra,elasticsearch|http|graphite|agpl-3.0|
|Newts|https://github.com/OpenNMS/newts/|maintained|java|cassandra|http|json|apache-2.0|
|OpenTSDB|https://github.com/OpenTSDB/opentsdb|maintained|java|hbase|http,tcp|json|lgpl|
|Apache Pinot|https://github.com/apache/incubator-pinot|active|java|s3,hdfs,azdls|http|pql|apache-2.0|
|PipelineDB|https://github.com/pipelinedb/pipelinedb|dead|c|postgresql|tcp|sql|apache-2.0|
|Prometheus|https://github.com/prometheus/prometheus|active|go|localfs|prometheus|promql|apache-2.0|
|QuestDB|https://github.com/questdb/questdb|active|java|localfs|postgres|sql|apache-2.0|
|Seriously|https://github.com/dustin/seriesly|dead|go|localfs|http|json|mit|
|Sidewinder|https://github.com/srotya/sidewinder|dead|java|localfs|tcp|sql|apache-2.0|
|SiriDB|https://github.com/SiriDB/siridb-server|active|c|localfs|http|text|mit|
|TDengine|https://github.com/taosdata/TDengine|active|c|localfs|tcp|sql|agpl-3.0|
|Tgres|https://github.com/tgres/tgres|dead|go|postgresql|tcp|sql|apache-2.0|
|Thanos|https://github.com/thanos-io/thanos|active|go|localfs,s3|http,grpc|promql|apache-2.0|
|Timebala|https://github.com/mattbostock/timbala|dead|go|localfs|http|promql|apache-2.0|
|Timely|https://github.com/NationalSecurityAgency/timely|maintained|java|hdfs,accumulo|http|json|apache-2.0|
|TimescaleDB|https://github.com/timescale/timescaledb|active|c|postgresql|postgres|sql|apache-2.0|
|TrailDB|https://github.com/traildb/traildb|dead|c|localfs|embed|python|mit|
|tsdb-layer|https://github.com/richardartoul/tsdb-layer|dead|go|foundationdb|grpc|text|unknown|
|μts|https://github.com/mixer/uts|dead|javascript|memory|embed|json|mit|
|Vaultaire|https://github.com/afcowie/vaultaire|dead|haskell|ceph|http|json|unknown|
|VictoriaMetrics|https://github.com/VictoriaMetrics/VictoriaMetrics|active|go|localfs|http|promql,metricsql|apache-2.0|
|Vulcan|https://github.com/digitalocean/vulcan|dead|go|cassandra|http|promql|apache-2.0|
|Warp10|https://github.com/senx/warp10-platform|active|java|leveldb,hbase|http|warpscript|apache-2.0|
|Xephon-K|https://github.com/xephonhq/xephon-k|dead|go|cassandra,localfs|http,grpc|json|mit|

<!--DBTABLE_END-->

## Acknowledgement and Alternatives

- [dbdb.io](https://github.com/cmu-db/dbdb.io) A database for all the databases by [@apavlo](https://github.com/apavlo) from [CMU DB](https://db.cs.cmu.edu/)
- [awesome big data](https://github.com/onurakpolat/awesome-bigdata#time-series-databases)
- [List of Time Series Databases](https://misfra.me/2016/04/09/tsdb-list/) by [Preetam Jinka](https://twitter.com/PreetamJinka)
- [awesome db](https://github.com/numetriclabz/awesome-db)
- [Ultimate-TSDB-Comparison](https://tsdbbench.github.io/Ultimate-TSDB-Comparison/)
- [Github topic: timeseries-database](https://github.com/topics/timeseries-database)
- [Open Source Time Series DB Comparison](https://docs.google.com/spreadsheets/d/1sMQe9oOKhMhIVw9WmuCEWdPtAoccJ4a-IuZv4fXDHxM/edit#gid=0)

## License

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [Pinglei Guo](https://github.com/at15) has waived all copyright and related or neighboring rights to this work.
