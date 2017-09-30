// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import store from './store/store'
import Game from './components/Game'

Vue.config.productionTip = false

// window.store = store
Vue.use(Vuex)

/* eslint-disable no-new */
window.vue = new Vue({
  el: '#app',
  store,
  template: '<game></game>',
  components: {Game}
})
