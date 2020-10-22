import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogged: false
  },
  mutations: {
    switchLogged (state) {
      state.isLogged = !state.isLogged
    }
  },
  getters: {
    getIsLogged (state) {
      return state.isLogged
    }
  }
})
