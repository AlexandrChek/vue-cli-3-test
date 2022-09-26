export const postModule = {
    namespaced: true,
    state: () => ({
        likesMod: 1
    }),
    getters: {
        doubleLikesMod(state) {
          return state.likesMod * 2
        }
    },
    mutations: {
        incrementLikesMod(state) {
          state.likesMod++
        }
    },
    actions: {
       incrementMod ({commit}) {
        commit('incrementLikesMod')
       }
    }
}