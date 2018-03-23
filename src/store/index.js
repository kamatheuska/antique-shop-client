import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    credentials: {
      user: ''
    }
  },
  mutations: {
    UPDATE: (state, payload) => {
      state.credentials.user = payload.toLowerCase()
        .split(' ')
        .map((word) =>
          word.replace(word[0], word[0].toUpperCase()))
        .join(' ')
      console.log(state.credentials.user)
    }
  },
  actions: {
    login () {

    }
  }
})
