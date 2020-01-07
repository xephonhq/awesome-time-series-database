<template>
    <div>
        <ul>
            <li>Name: {{ db.displayName }}</li>
            <li>Status: {{ db.status }}</li>
            <li>Website: <a v-bind:href="db.website" target="_blank">{{ db.website }}</a></li>
            <li>GitHub: <a v-bind:href="db.github" target="_blank">{{ db.github }}</a></li>
            <li>Language: {{ db.lang }}</li>
            <li>Backends: {{ db.backend }}</li>
            <li>Protocol: {{ db.protocol }}</li>
            <li>Query: {{ db.query }}</li>
            <li>License: {{ db.license }}</li>
        </ul>
    </div>
</template>

<script>
  import { databases } from '../../../../data/database'
  
  export default {
    name: 'database-detail',
    props: ['dbname'],
    data() {
      // console.log('dbname', this.dbname)
      let selectedDB = {
        name: 'database not found'
      }
      for (const db of databases) {
        if (db.name === this.dbname) {
          selectedDB = db
          break
        }
      }
      return {
        db: selectedDB
      }
    }
  }
</script>

<style scoped>

</style>