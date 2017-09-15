import Vue from 'vue'
import Vuex from 'vuex'

import game from './modules/game'
import lives from './modules/lives'
import score from './modules/score'
import misses from './modules/misses'

Vue.use(Vuex)

const state = {}
const getters = {}
const mutations = {}

const actions = {}

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    game,
    lives,
    score,
    misses
  },
  strict: debug
})
export default store
