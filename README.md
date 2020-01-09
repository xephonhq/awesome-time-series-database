# Awesome time series database

[![Build Status](https://travis-ci.org/xephonhq/awesome-time-series-database.svg?branch=master)](https://travis-ci.org/xephonhq/awesome-time-series-database)
[![Netlify Status](https://api.netlify.com/api/v1/badges/2ea12ac4-c2b9-4767-87d6-8ac65ce5ee30/deploy-status)](https://app.netlify.com/sites/awesome-time-series-database/deploys)

A curated list of time series databases.
For filtering based on language, backend etc. Check out the [website](https://awesome-time-series-database.netlify.com/)

<!--DBTABLE_START-->
|name|github|status|lang|backend|protocol|query|license|
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
|Akumuli|https://github.com/akumuli/Akumuli|maintained|c++|localfs|tcp|text|apache-2.0|
|Atlas|https://github.com/Netflix/atlas|maintained|scala|memory|http|stack|apache-2.0|
|Beringei|https://github.com/facebookarchive/beringei|dead|c++|memory|thrift|thrift|bsd|
|BigGraphite|https://github.com/criteo/biggraphite|maintained|python|cassandra|http|graphite|apache-2.0|
|Blueflood|https://github.com/rackerlabs/blueflood|dead|java|cassandra,elasticsearch|http|json|apache-2.0|
|BTrDB|https://github.com/BTrDB/btrdb-server|maintained|go|ceph|http|json|gpl|
|Catena|https://github.com/Cistern/catena|dead|go|localfs|http|json|bsd|
|Citus|https://github.com/citusdata/citus|active|c|postgresql|tcp|sql|agpl-3.0|
|ClickHouse|https://github.com/ClickHouse/ClickHouse|active|c++|localfs|tcp|sql|apache-2.0|
|DalmatinerDB|https://github.com/dalmatinerdb/dalmatinerdb|maintained|erlang|localfs|http|text|mit|
|Flint|https://github.com/twosigma/flint|maintained|scala|spark|http|json|apache-2.0|
|Gnocchi|https://github.com/gnocchixyz/gnocchi|dead|python|localfs|http|json|apache-2.0|
|HawkularMertics|https://github.com/hawkular/hawkular-metrics|maintained|java|cassandra|http|json|apache-2.0|
|Heroic|https://github.com/spotify/heroic|maintained|java|bigtable,cassandra,elasticsearch|http|json|apache-2.0|
|InfluxDB|https://github.com/influxdata/influxdb|active|go|localfs|http|influxql,flux|mit|
|KairosDB|https://github.com/kairosdb/kairosdb|maintained|java|cassandra|http|json|apache-2.0|
|Khronus|https://github.com/khronus/khronus|dead|scala|cassandra|http|json,influxql|apache-2.0|
|Metrictank|https://github.com/grafana/metrictank|active|go|cassandra,elasticsearch|http|graphite|agpl-3.0|
|Newts|https://github.com/OpenNMS/newts/|maintained|java|cassandra|http|json|apache-2.0|
|OpenTSDB|https://github.com/OpenTSDB/opentsdb|maintained|java|hbase|http,tcp|json|lgpl|
|Apache Pinot|https://github.com/apache/incubator-pinot|active|java|s3,hdfs,azdls|http|pql|apache-2.0|
|Prometheus|https://github.com/prometheus/prometheus|active|go|localfs|prometheus|promql|apache-2.0|
|Seriously|https://github.com/dustin/seriesly|dead|go|localfs|http|json|mit|
|Tgres|https://github.com/tgres/tgres|dead|go|postgresql|tcp|sql|apache-2.0|
|TimescaleDB|https://github.com/timescale/timescaledb|active|c|postgresql|tcp|sql|apache-2.0|
|Vaultaire|https://github.com/afcowie/vaultaire|dead|haskell|ceph|http|json|unknown|
|Xephon-K|https://github.com/xephonhq/xephon-k|dead|go|cassandra,localfs|http,grpc|json|mit|

<!--DBTABLE_END-->

## Acknowledgement and Alternatives

- [awesome big data](https://github.com/onurakpolat/awesome-bigdata#time-series-databases)
- [List of Time Series Databases](https://misfra.me/2016/04/09/tsdb-list/) by [Preetam Jinka](https://twitter.com/PreetamJinka)
- [awesome db](https://github.com/numetriclabz/awesome-db)
- [Ultimate-TSDB-Comparison](https://tsdbbench.github.io/Ultimate-TSDB-Comparison/)
- [Github topic: timeseries-database](https://github.com/topics/timeseries-database)
- [Open Source Time Series DB Comparison](https://docs.google.com/spreadsheets/d/1sMQe9oOKhMhIVw9WmuCEWdPtAoccJ4a-IuZv4fXDHxM/edit#gid=0)

## License

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [Pinglei Guo](https://github.com/at15) has waived all copyright and related or neighboring rights to this work.