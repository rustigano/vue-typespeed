const state = {
  maxLives: 3,
  lives: 3
}

const getters = {
  getLives (state) {
    return state.lives
  }
}
const mutations = {
  resetLives (state) {
    state.lives = state.maxLives
  },
  die (state) {
    state.lives--
    // console.log('die')
  }
}
const actions = {
  resetLives (context) {
    context.commit('resetLives')
  },
  die (context) {
    context.commit('die')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
