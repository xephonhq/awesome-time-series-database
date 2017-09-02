<template>
    <div class="ui container">
        <img class="ui centered small image" src="../assets/awesome.png"/>
        <h1 class="ui center aligned header">Awesome Time Series Database</h1>
        <div class="ui grid">
            <div class="four wide column">
                <nuxt-link to="/databases" class="fluid ui orange button">Databases</nuxt-link>
            </div>
            <div class="four wide column">
                <nuxt-link to="/backends" class="fluid ui blue button">Backends</nuxt-link>
            </div>
            <div class="four wide column">
                <nuxt-link to="/papers" class="fluid ui green button">Papers</nuxt-link>
            </div>
            <div class="four wide column">
                <nuxt-link to="/benchmarks" class="fluid ui red button">Benchmarks</nuxt-link>
            </div>
        </div>
        <br>
        <div class="ui form">
            <div class="inline fields">
                <div class="four wide field">
                    <label>Backend</label>
                    <select v-model='backend' class="ui selection dropdown">
                        <option value='All'>All</option>
                        <option :value="backend" v-for="(backend, index) in backends" v-bind:key="index">{{ backend }}
                        </option>
                    </select>
                </div>
                <div class="four wide field">
                    <label>Language</label>
                    <select v-model='lang' class="ui selection dropdown">
                        <option value='All'>All</option>
                        <option :value="lang" v-for="(lang, index) in languages" v-bind:key="index">{{ lang }}</option>
                    </select>
                </div>
            </div>
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
            <tr v-for="(tsdb, name) in displayedTSDB" v-bind:key="name">
                <td>
                    <nuxt-link :to="'databases/' + name">{{ name }}</nuxt-link>
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
  import databases from '../../data/database';
  import meta from '../../data/meta';

  export default {
    components: {},
    data () {
      // console.log(this.$route.query);
      let lang = 'All';
      let backend = 'All';
      if (this.$route.query.language !== '') {
        lang = this.$route.query.language;
      }
      if (this.$route.query.backend !== '') {
        backend = this.$route.query.backend;
      }
      return {
        greeting: 'Welcome to your Vue.js app!',
        displayedTSDB: databases,
        originalTSDB: databases,
        languages: meta.languages,
        backends: meta.backends,
        lang: lang,
        backend: backend
      };
    },
    watch: {
      lang () {
        this.updateTable();
      },
      backend () {
        this.updateTable();
      }
    },
    methods: {
      updateTable () {
        // console.log(this.lang);
        // console.log(this.backend);
        const lang = this.lang;
        const backend = this.backend;
        // https://github.com/nuxt/nuxt.js/issues/1101
        // TODO: make use of router parameter when loading
        this.$router.push({path: this.$route.path, query: {language: lang, backend: backend}});
        console.log(this.$route.query);
        let t = {};
        for (let k in this.originalTSDB) {
          if (!this.originalTSDB.hasOwnProperty(k)) {
            continue;
          }
          let keep = true;
          if (lang !== 'All' && lang !== this.originalTSDB[k].language) {
            keep = false;
          }
          if (backend !== 'All' && !this.originalTSDB[k].backends.includes(backend)) {
            keep = false;
          }
          if (keep) {
            t[k] = this.originalTSDB[k];
          }
        }
        this.displayedTSDB = t;
      }
    }
  };
</script>
