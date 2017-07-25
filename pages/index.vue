<template>
    <div class="ui container">
        <h1>Awesome Time Series Database</h1>
        <div>
            <select v-model='lang' class="ui selection dropdown">
                <option value='All'>All</option>
                <option :value="lang" v-for="(lang, index) in languages" v-bind:key="index">{{ lang }}</option>
            </select>
        </div>
        <table class='ui celled table'>
            <thead>
            <tr>
                <th>Name</th>
                <th>Website</th>
                <th>GitHub</th>
                <th>Description</th>
                <th>Language</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(tsdb, name) in tsdbs" v-bind:key="name">
                <td>
                    <nuxt-link :to="'db/' + name">{{ name }}</nuxt-link>
                </td>
                <td>
                    <a :href="tsdb.url" target="_blank">
                        {{ tsdb.url }}
                    </a>
                </td>
                <td>
                    <a :href="tsdb.github" target="_blank">
                        {{ tsdb.github }}
                    </a>
                </td>
                <td>{{ tsdb.description }}</td>
                <td>{{ tsdb.language }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<style>

</style>

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
