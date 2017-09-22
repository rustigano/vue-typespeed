const state = {
  playState: 'welcome' /* running / ended */,
  wordsOnScreen: [],
  gameScreenWidth: 0
}

export const getters = {
  getState (state) {
    return state.playState
  },
  getWordsOnScreen (state) {
    return state.wordsOnScreen
  },
  getWordByIndex (state, index) {
    return state.wordsOnScreen[index]
  },
  getWordIndex (state, w) {
    if (state.wordsOnScreen.length === 0) return -1
    return state.wordsOnScreen.findIndex(word => word.word === w)
  },
  getGameScreenWidth (state) {
    return state.gameScreenWidth
  }
}
export const mutations = {
  setState (state, value) {
    state.playState = value
  },
  setGameScreenWidth (state, value) {
    state.gameScreenWidth = value
  },
  addWord (state, word) {
    state.wordsOnScreen.push(word)
  },
  removeWord (state, word) {
    let index = state.wordsOnScreen.indexOf(word)
    state.wordsOnScreen.splice(index, 1)
  },
  removeWordByIndex (state, index) {
    state.wordsOnScreen.splice(index, 1)
  },
  resetWords (state) {
    state.wordsOnScreen = []
  },
  advanceWordsOnScreen (state) {
    state.wordsOnScreen.forEach(word => { word.x += word.speed })
  }
}
const actions = {
  setState (context, value) {
    context.commit('setState', value)
  },
  setGameScreenWidth (context, value) {
    context.commit('setGameScreenWidth', value)
  },
  addWord (context, value) {
    context.commit('addWord', value)
  },
  removeWord (context, value) {
    context.commit('removeWord', value)
  },
  removeWordByIndex (context, value) {
    context.commit('removeWordByIndex', value)
  },
  resetWords (context) {
    context.commit('resetWords')
  },
  advanceWordsOnScreen (context) {
    context.commit('advanceWordsOnScreen')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
