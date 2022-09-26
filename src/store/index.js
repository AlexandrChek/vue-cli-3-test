import { createStore } from 'vuex'
import { postModule } from './postModule'

export default createStore({
  state: () => ({
    likes: 2
  }),
  getters: {
    doubleLikes(state) {
      return state.likes * 2
    }
  },
  mutations: {
    incrementLikes(state) {
      state.likes++
    }
  },
  actions: {
   increment ({commit}) {
    commit('incrementLikes')
   }
  },
  modules: {
    post: postModule
  }
})
