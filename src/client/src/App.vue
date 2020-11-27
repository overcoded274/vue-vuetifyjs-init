<template>
  <v-app light>
    <apps-header 
      style="z-index: 1;" :routeHome="routeHome"
    ></apps-header>
    <router-view></router-view>
    <apps-footer></apps-footer>
  </v-app>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'

  export default {
    name: 'app',
    components: {
      appsHeader: Header,
      appsFooter: Footer,
    },
    data: () => ({

    }),
    computed: {
      routeHome () {
        return this.$route.path === '/'
      }
    }
  }
</script>

<style scoped>

</style>
