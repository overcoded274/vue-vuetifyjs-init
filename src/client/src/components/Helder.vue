<template>
  <v-container fluid fill-height style="margin-top: -76px;">
    <template v-if="profiles.length === 1">
      <v-img :src="profiles[0].src" height="100%" aspect-ratio=1.7778>
        <v-row
          align="center"
          justify="center"
          class="main-text"
        >
          <h1 class="mb-4 white--text">{{ user.name }}&nbsp;</h1>
          <h4 class="subheading white--text">,&nbsp;{{ user.actions }}</h4>
        </v-row>
      </v-img>
    </template>
    <template v-else>
      <v-carousel height="100%">
        <v-carousel-item
          v-for="(profile, index) in profiles"
          :key="index"
          :src="profile.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <v-row
            align="center"
            justify="center"
            class="main-text"
          >
            <h1 class="mb-4 white--text">{{ user.name }}&nbsp;</h1>
            <h4 class="subheading white--text">,&nbsp;{{ user.actions }}</h4>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </template>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    
  },
  data: () => ({
    profiles: [
      {
        src: require(`./Helder/galaxy.png`),
      },
      // {
      //   src: require(`./Helder/0x00.jpg`),
      // },
    ],
  }),
  computed: {
    ...mapGetters({
      user: 'user',
    }),
  },
  methods: {
    ...mapActions({
      
    }),    
  }
};
</script>

<style scoped>
  .main-text {
    font-weight: bold;
    font-size: 2rem;
    font-family: Vampiro One;
    margin-top: 27%;
    margin-left: 14%
  }
</style>