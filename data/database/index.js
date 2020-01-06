import { databaseSchema } from './schema.js'

import { heroic } from './heroic.js'
import { influxdb } from './influxdb.js'
import { kairosdb } from './kairosdb.js'
import { opentsdb } from './opentsdb.js'
import { xephonk } from './xephonk.js'

let databases = [
  heroic,
  influxdb,
  kairosdb,
  opentsdb,
  xephonk,
]

export { databaseSchema, databases }