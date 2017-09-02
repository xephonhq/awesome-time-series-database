<template>
    <div class="ui container">
        <h2 v-if="error.statusCode === 404" class="ui center aligned icon header">
            <i class="info circle icon"></i>
            Page not found
        </h2>
        <h2 class="ui center aligned icon header" v-else >
            <i class="info circle icon"></i>
            An error occurred
        </h2>
        <nuxt-link to="/">Home page</nuxt-link>
    </div>
</template>

<script>
  export default {
    props: ['error']
  };
</script>