<template>
    <div>
        <p>{{ title }}</p>
        <div>
            <ul>
                <li v-for="opt in options">
                    <label>
                        {{ opt.name }}
                        <select v-model="opt.value">
                            <option v-bind:value="v" v-for="v in opt.values">{{ v }}</option>
                        </select>
                    </label>
                </li>
            </ul>
        </div>
        <div>
            what you selected is
            <span v-for="opt in options">{{ opt.name }}: {{ opt.value }} &nbsp;</span>
        </div>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Language</th>
                <th>Backend</th>
                <th>License</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="db in filtered">
                <td><a v-bind:href="'database/' + db.name" target="_blank">{{ db.name }}</a></td>
                <td>{{ db.lang }}</td>
                <td>{{ db.backend }}</td>
                <td>{{ db.license }}</td>
                <td>{{ db.status }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
  import { databases, databaseSchema } from '../../../../data/database'

  export default {
    name: 'database-table',
    props: ['title'],
    data () {

      // console.log('router query', this.$route.query)
      // TODO: convert parameters to the new generalized method
      // TODO: get lang and backend from router query parameters
      //https://github.com/xephonhq/awesome-time-series-database/blob/df1aae8571f8e1c3200d3b0d7fe6590f6684a7ed/web/pages/index.vue
      // let lang = 'all'
      // let backend = 'all'
      // if (this.$route.query.language !== '') {
      //   lang = this.$route.query.language
      // }
      // if (this.$route.query.backend !== '') {
      //   backend = this.$route.query.backend
      // }

      // console.log('all databases', databaseSchema, databases)
      // options are a copy of the schema
      let options = []
      for (const col of databaseSchema) {
        // columns without values can't be filtered in UI
        if (!col.values) {
          continue
        }

        let values = ['all']
        values.push(...col.values)
        options.push({
          name: col.name,
          type: col.type,
          value: 'all',
          values: values
        })
      }

      return {
        databases: databases,
        options: options
      }
    },
    computed: {
      filtered: function () {
        // TODO: update router based on filter tag so user can copy and share it
        // TODO: check before push to avoid NavigationDuplicated error
        // this.$router.push({ path: '', query: { language: lang, backend: backend } })

        let tmp = this.databases.slice()
        for (const opt of this.options) {
          if (opt.value === 'all') {
            continue
          }

          let filtered = []
          for (const db of tmp) {
            switch (opt.type) {
              case 'value':
                if (db[opt.name] === opt.value) {
                  filtered.push(db)
                }
                break
              case 'array':
                if (db[opt.name].includes(opt.value)) {
                  filtered.push(db)
                }
                break
              default:
                console.error('unknown option type', opt.type)
            }
          }
          tmp = filtered
        }
        // console.log('after filter', tmp)
        return tmp
      }
    }
  }
</script>

<style scoped>

</style>