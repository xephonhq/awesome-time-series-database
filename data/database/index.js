import { databaseSchema } from './schema.js'

import { akumuli } from './akumuli.js'
import { arctic } from './arctic.js'
import { argus } from './argus.js'
import { atlas } from './atlas.js'
import { beringei } from './beringei.js'
import { biggraphite } from './biggraphite.js'
import { blueflood } from './blueflood.js'
import { btrdb } from './btrdb.js'
import { catena } from './catena.js'
import { chronix } from './chronix.js'
import { citus } from './citus.js'
import { clickhouse } from './clickhouse.js'
import { cortex } from './cortex.js'
import { crate } from './crate.js'
import { dalmatinerdb } from './dalmatinerdb.js'
import { filodb } from './filodb.js'
import { flint } from './flint.js'
import { gnocchi } from './gnocchi.js'
import { hawkularmetrics } from './hawkularmetrics.js'
import { heroic } from './heroic.js'
import { influxdb } from './influxdb.js'
import { iotdb } from './iotdb.js'
import { irondb } from './irondb.js'
import { kairosdb } from './kairosdb.js'
import { khronus } from './khronus.js'
import { lindb } from './lindb.js'
import { m3db } from './m3db.js'
import { metrictank } from './metrictank.js'
import { newts } from './newts.js'
import { opentsdb } from './opentsdb.js'
import { pinot } from './pinot.js'
import { pinusdb } from './pinusdb.js'
import { pipelinedb } from './pipelinedb.js'
import { prometheus } from './prometheus.js'
import { questdb } from './questdb.js'
import { seriously } from './seriously.js'
import { sidewinder } from './sidewinder.js'
import { siridb } from './siridb.js'
import { tdengine } from './tdengine.js'
import { tgres } from './tgres.js'
import { thanos } from './thanos.js'
import { timbala } from './timbala.js'
import { timely } from './timely.js'
import { timescaldb } from './timescaledb.js'
import { traildb } from './traildb.js'
import { tsdblayer } from './tsdblayer.js'
import { uts } from './uts.js'
import { vaultaire } from './vaultaire.js'
import { victoriametrics } from './victoriametrics.js'
import { vulcan } from './vulcan.js'
import { warp10 } from './warp10.js'
import { xephonk } from './xephonk.js'

let databases = [
  akumuli,
  arctic,
  argus,
  atlas,
  beringei,
  biggraphite,
  blueflood,
  btrdb,
  catena,
  chronix,
  citus,
  clickhouse,
  cortex,
  crate,
  dalmatinerdb,
  filodb,
  flint,
  gnocchi,
  hawkularmetrics,
  heroic,
  influxdb,
  iotdb,
  irondb,
  kairosdb,
  khronus,
  lindb,
  m3db,
  metrictank,
  newts,
  opentsdb,
  pinot,
  pinusdb,
  pipelinedb,
  prometheus,
  questdb,
  seriously,
  sidewinder,
  siridb,
  tdengine,
  tgres,
  thanos,
  timbala,
  timely,
  timescaldb,
  traildb,
  tsdblayer,
  uts,
  vaultaire,
  victoriametrics,
  vulcan,
  warp10,
  xephonk,
]

export { databaseSchema, databases }