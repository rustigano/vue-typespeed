const state = {
  missed: 0
}

const getters = {
  getMisses (state) {
    return state.missed
  }
}
const mutations = {
  resetMisses (state) {
    state.missed = 0
  },
  addMiss (state) {
    state.missed++
  }
}
const actions = {
  resetMisses (context, value) {
    context.commit('resetMisses')
  },
  addMiss (context) {
    context.commit('addMiss')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
