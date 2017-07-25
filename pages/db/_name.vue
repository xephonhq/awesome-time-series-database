<template>
    <!-- TODO: actually I don't know how this works ....  -->
    <!-- https://nuxtjs.org/examples/nested-routes/  -->
    <div>
        <h2>{{ name }}</h2>
    </div>
</template>

<script>
  export default {
    asyncData ({ params }) {
      return {
        name: params.name
      };
    }
  };
</script>
