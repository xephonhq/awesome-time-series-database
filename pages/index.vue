<template>
    <div>
        <h1>Awesome Time Series Database</h1>
        <div>
            <select v-model='lang'>
                <option value='All'>All</option>
                <option v-bind:value='lang' v-for='lang in languages'>{{ lang }}</option>
            </select>
        </div>
        <table class='table'>
            <thead>
            <tr>
                <th>Name</th>
                <th>Url</th>
                <th>Description</th>
                <th>Language</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for='(tsdb, name) in tsdbs'>
                <td>{{ name }}</td>
                <td><a :href='tsdb.url' target='_blank'>
                    {{ tsdb.url }}
            </a></td>
                <td>{{ tsdb.description }}</td>
                <td>{{ tsdb.language }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
  import databases from '../data/database';
  export default {
    data () {
      return {
        greeting: 'Welcome to your Vue.js app!',
        tsdbs: databases,
        originalTsdbs: databases,
        languages: ['Java', 'C++', 'Go', 'Scala', 'Haskell'],
        lang: 'All'
      };
    },
    watch: {
      lang (newLang) {
        console.log('newLang', newLang);
        if (newLang === 'All') {
          this.tsdbs = this.originalTsdbs;
          return;
        }
        let t = {};
        for (let k in this.originalTsdbs) {
          if (!this.originalTsdbs.hasOwnProperty(k)) {
            continue;
          }
          if (newLang === this.originalTsdbs[k].language) {
            t[k] = this.originalTsdbs[k];
          }
        }
        this.tsdbs = t;
      }
    }
  };
</script>
