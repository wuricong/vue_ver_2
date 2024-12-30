import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
const store = new Vuex.Store({
  state: () => ({
    num: 0
  }),
  mutations: {
    updateInfo(state, payload) {
      state.num += payload
    }
  }
})

export default store
