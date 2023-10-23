import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter: 0
  },
  getters: {
  },
  mutations: {
    decreaseCounter(state, randomNumber) {
      state.counter -= randomNumber
    },
    increaseCounter(state, randomNumber) {
      state.counter += randomNumber
    }
  },
  actions: {
    decreaseCounter({ commit }) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
          commit('decreaseCounter', response.data)
      })
    },
    increaseCounter({ commit }) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
        commit('increaseCounter', response.data)
      })
  }
  },
  getters: {

  },
  modules: {
  }
})
