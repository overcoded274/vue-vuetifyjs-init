<template>
  <v-main>
    <apps-helder />
  </v-main>
</template>

<script>
  import Helder from '../components/Helder'

  export default {
    name: 'apps-home',
    components: {
      appsHelder: Helder,
    },
  }
</script>
