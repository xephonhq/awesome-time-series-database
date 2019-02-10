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
import { databases } from '../../data/databases';

export default {
  data () {
    console.log('table-1.vue', databases);
    // TODO: get lang and backend from router query parameters
    const lang = 'all';
    const backend = 'all';

    return {
      databases: databases,
      lang: lang,
      backend: backend
    };
  },
  computed: {
    filtered: function () {
      const lang = this.lang;
      const databases = this.databases;

      const t = [];
      for (let i = 0; i < databases.length; i++) {
        if (lang === 'all' || databases[i].lang === lang) {
          t.push(databases[i]);
        }
      }
      return t;
    }
  }
};
</script>

