const state = {
  score: 0
}

const getters = {
  getScore (state) {
    return state.score
  }
}
const mutations = {
  setScore (state, value) {
    state.score = value
  },
  addToScore (state, value) {
    state.score += value
  }
}
const actions = {
  setScore (context, value) {
    context.commit('setScore', value)
  },
  addToScore (context, value) {
    context.commit('addToScore', value)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
