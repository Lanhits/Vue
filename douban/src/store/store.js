import vuex from 'vuex'
import Vue from 'vue'

Vue.use(vuex)

const store = new vuex.Store({
  state: {
    want: {},
    watched: {}
  },
  mutations: {
    want (sate, one) {
      Object.assign(sate.want, one)
    },
    watched (sate, one) {
      Object.assign(sate.watched, one)
    }
  }
})

export default store
