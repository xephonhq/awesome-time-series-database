<template>
    <div>
        <p>
            example: table: awesome databases
        </p>
        <div>
            <label>lang</label>
            <select v-model="lang">
                <option value="all">all</option>
                <option value="java">java</option>
                <option value="go">go</option>
            </select>
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
</template>

<script>
  import { databases } from '../../data/databases'

  export default {
    data () {
      console.log('table-1.vue', databases)
      console.log(this.$route.query)
      // TODO: get lang and backend from router query parameters
      //https://github.com/xephonhq/awesome-time-series-database/blob/df1aae8571f8e1c3200d3b0d7fe6590f6684a7ed/web/pages/index.vue
      let lang = 'all'
      let backend = 'all'
      if (this.$route.query.language !== '') {
        lang = this.$route.query.language
      }
      if (this.$route.query.backend != '') {
        backend = this.$route.query.backend
      }

      return {
        databases: databases,
        lang: lang,
        backend: backend
      }
    },
    computed: {
      filtered: function () {
        // TODO: handle lang == 'All' for backward compatibility and show warning when an unknown lang is given
        const lang = this.lang ? this.lang : 'all'
        const backend = this.backend ? this.backend : 'all'
        const databases = this.databases
        // Update url so user can copy and share
        this.$router.push({ path: '', query: { language: lang, backend: backend } })

        const t = []
        for (let i = 0; i < databases.length; i++) {
          if (lang === 'all' || databases[i].lang === lang) {
            t.push(databases[i])
          }
        }
        return t
      }
    }
  }
</script>

