<template>
  <v-app-bar :flat="routeHome" color="transparent" max-height="64px">
    <v-avatar :size="48" tile> 
      <img :src="user.profile" :style="styleHome">
    </v-avatar>
    <span
      :class="routeHome ? 'white--text' : 'black--text'"
      style="font-family: Vampiro One; font-size: 1.414rem;"
      v-text="user.name"
    ></span>
    <!-- v-text="title" -->
    <v-spacer></v-spacer>
    <v-flex xs1>
      <router-link to="/">
        <v-icon :class="routeHome ? 'white--text' : 'grey--text'">mdi-chevron-right</v-icon>
        <strong :class="routeHome ? 'white--text' : 'black--text'">&nbsp;Home</strong>
      </router-link>
    </v-flex>
    <v-flex xs1>
      <router-link to="/demo">
        <v-icon :class="routeHome ? 'white--text' : 'grey--text'">mdi-fire</v-icon>
        <strong :class="routeHome ? 'white--text' : 'black--text'">&nbsp;Demo</strong>
      </router-link>
    </v-flex>
    <v-flex xs1>
      <router-link to="/readme">
        <v-icon :class="routeHome ? 'white--text' : 'grey--text'">mdi-fingerprint</v-icon>
        <strong :class="routeHome ? 'white--text' : 'black--text'">&nbsp;ReadMe</strong>
      </router-link>
    </v-flex>
  </v-app-bar>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'apps-header',
    props: {
      routeHome: {
        type: Boolean,
        default: true,
      }
    },
    data: () => ({
      // header
      title: "",
    }),
    computed: {
      ...mapGetters({
        user: 'user',
      }),
      styleHome () {
        return 'border-radius:27%;' + (this.routeHome ? 'filter: invert(100%); -webkit-filter: invert(100%)' : '')
      }
    },
    methods: {
      ...mapActions({
        
      }),      
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>
