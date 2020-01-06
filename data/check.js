import { databases, databaseSchema } from './database/index.js'

// checks if all the properties defined in schema are presented and the type is correct.
function checkDatabases () {
  // TODO: how to handle error in js? errs++ and console.error is definitely not the right way
  let errs = 0
  for (const db of databases) {
    if (!db.name) {
      errs++
      console.error('name is required for ', db)
      continue
    }

    let name = db.name
    for (const col of databaseSchema) {
      let val = db[col.name]
      if (!val) {
        errs++
        console.error('%s does not have property', name, col.name)
        continue
      }
      switch (col.type) {
        case 'value':
          if (typeof val !== 'string') {
            errs++
            console.error('%s has wrong property type for %s want string got %s', name, col.name, typeof val)
            break
          }
          if (col.values && !col.values.includes(val)) {
            errs++
            console.error('%s has invalid value for %s got %s want one of %s', name, col.name, val, col.values)
          }
          break
        case 'array':
          if (!Array.isArray(val)) {
            errs++
            console.error('%s has wrong property type for %s want array got %s', name, col.name, typeof val)
            break
          }
          if (col.values) {
            for (const v of val) {
              if (!col.values.includes(v)) {
                errs++
                console.error('%s has invalid value for %s got %s want one of %s', name, col.name, val, col.values)
              }
            }
          }
          break
        default:
          errs++
          console.error('unknown column type', col.type)
      }
    }
  }
  return errs
}

function check () {
  let errs = checkDatabases()
  if (errs !== 0) {
    console.error('got %d errors from checkDatabases', errs)
    process.exit(1)
  }
}

check()