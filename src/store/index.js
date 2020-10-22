import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogged: false
  },
  mutations: {
    switchLogged (state, value) {
      console.log(typeof value)
      state.isLogged = value
    }
  },
  getters: {
    getIsLogged (state) {
      return state.isLogged
    }
  }
})
