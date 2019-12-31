<template>
    <div>
        <p>{{ title }}</p>
        1 + 1 = {{ 1 + 1 }}
        <div>
            <p>new table</p>
            <div>
                <span v-for="opt in options">
                    <label>{{ opt.name }}</label>
                    <select v-model="opt.value">
                        <option v-bind:value="v" v-for="v in opt.values">{{ v }}</option>
                    </select>
                </span>
            </div>
            <div>
                what you selected is
                <span v-for="opt in options">{{ opt.name }} {{ opt.value }}</span>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Language</th>
                    <th>Backend</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="db in filtered">
                    <td>{{ db.name }}</td>
                    <td>{{ db.lang }}</td>
                    <td>{{ db.backend }}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
  import { databases } from '../../../../data/databases'

  export default {
    name: 'database',
    props: ['title'],
    data () {
      console.log('all databases', databases)
      console.log('router query', this.$route.query)
      // TODO: convert parameters to the new generalized method
      // TODO: get lang and backend from router query parameters
      //https://github.com/xephonhq/awesome-time-series-database/blob/df1aae8571f8e1c3200d3b0d7fe6590f6684a7ed/web/pages/index.vue
      let lang = 'all'
      let backend = 'all'
      if (this.$route.query.language !== '') {
        lang = this.$route.query.language
      }
      if (this.$route.query.backend !== '') {
        backend = this.$route.query.backend
      }

      const options = [
        {
          name: 'lang',
          value: 'all',
          values: ['all', 'java', 'go']
        },
        {
          name: 'backend',
          value: 'all',
          values: ['all', 'cassandra', 'hbase', 'local']
        }
      ]

      return {
        databases: databases,
        lang: lang,
        backend: backend,
        options: options
      }
    },
    computed: {
      filtered: function () {
        // TODO: the filter logic here need to be generalized
        // - update router based on filter tag
        // - apply all the filter (it's kind of like query execution), we are just applying one operator after another TODO: watch andy's query plan video, need it anyway

        let t = this.databases.slice()
        console.log('t1', t.length)

        // TODO: Update url so user can copy and share it
        // TODO: check before push to avoid NavigationDuplicated error
        // this.$router.push({ path: '', query: { language: lang, backend: backend } })

        for (const opt of this.options) {
          if (opt.value === 'all') {
            continue
          }
          let f = []
          for (const db of t) {
            console.log(opt.value, db[opt.name])
            if (db[opt.name] === opt.value) {
              f.push(db)
            }
          }
          t = f
        }
        console.log('t2', t.length)
        return t
      }
    }
  }
</script>

<style scoped>

</style>