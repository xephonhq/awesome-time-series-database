import fs from 'fs'
import { databases, databaseSchema } from './database/index.js'

function generateReadme () {
  let tbl = []
  for (const db of databases) {
    let row = []
    for (const col of databaseSchema) {
      if (col.md === false) {
        continue
      }
      let val = db[col.name]
      switch (col.type) {
        case 'value':
          row.push(val)
          break
        case 'array':
          row.push(val.join(','))
          break
        default:
          console.error('unknown column type', col.type)
      }
    }
    tbl.push(row)
  }

  let mdtbl = '|'
  let dots = []
  for (const col of databaseSchema) {
    if (col.md === false) {
      continue
    }
    if (col.mdname) {
      mdtbl += col.mdname + '|'
    } else {
      mdtbl += col.name + '|'
    }
    dots.push(':--:')
  }
  mdtbl += '\n'
  mdtbl += '|' + dots.join('|') + '|\n'

  for (const row of tbl) {
    mdtbl += '|'
    for (const val of row) {
      mdtbl += val + '|'
    }
    mdtbl += '\n'
  }

  // console.log(mdtbl)

  let old = fs.readFileSync('../README.md', 'utf-8')
  let regex = /<!--DBTABLE_START-->([\w\W]*)<!--DBTABLE_END-->/
  let replaced = old.replace(regex, '<!--DBTABLE_START-->\n' + mdtbl + '\n<!--DBTABLE_END-->')
  fs.writeFileSync('../README.md', replaced)
}

generateReadme()