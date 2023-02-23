import { createStore } from 'vuex'

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    spinner: true,
    message: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, values) {
      state.users = values
    },
    setUser(state, value) {
      state.user = value
    },
    setProductss(state, values) {
      state.users = values
    },
  },
  actions: {
  },
  modules: {
  }
})
