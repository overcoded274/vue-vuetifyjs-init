import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: 'Overcoded',
      actions: 'Vue+Vuetifyjs Template',
      profile: require(`@/assets/profile.jpg`),
    },
    plugins: [
      createPersistedState()
    ],
  },
  getters: {
    // eslint-disable-next-line
    user: (state, getters) => {
      return state.user
    }
  },
  mutations: {
    setUser: (state, payload) => {
      state.user = payload
    },
    setUserAttr: (state, payload) => {
      for (let [k, v] of Object.entries(payload)) {
        state.user[k] = v
      }
    }
  },
  actions: {
    setUser: (context, payload) => {
      context.commit('setUser', payload)
    },
    setUserAttr: (context, payload) => {
      context.commit('setUserAttr', payload)
    },
  }
})
