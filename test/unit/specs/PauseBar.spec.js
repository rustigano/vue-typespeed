import Vue from 'vue'
import store from '@/store/store'
import PauseBar from '@/components/PauseBar'
// @todo check if storing the state is still necessary
if (typeof Object.assign !== 'function') {
  Object.assign = function (target) {
    'use strict'
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object')
    }

    target = Object(target)
    for (var index = 1; index < arguments.length; index++) {
      var source = arguments[index]
      if (source != null) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key]
          }
        }
      }
    }
    return target
  }
}

function deepClone (obj) {
  let cloned = Object.assign({}, obj) //  new {a:1, b:2, c:3};
  return cloned
}

const initialState = deepClone(store.state)

describe('PauseBar.vue (welcome state)', () => {
  let vm
  beforeEach(function () {
    const Component = Vue.extend(PauseBar)
    vm = new Component({
      store: store
    }).$mount()
  })
  afterEach(() => {
    store.replaceState(initialState)
  })

  it('should have a pause method', () => {
    expect(vm.pauseGame).to.be.a('function')
  })
  it('should have a continue method', () => {
    expect(vm.continueGame).to.be.a('function')
  })
  it('should NOT display pause or continue button when game is NOT running', (done) => {
    vm.$store.dispatch('setState', 'welcome')
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('#btnPause')).to.be.null
      expect(vm.$el.querySelector('#btnContinue')).to.be.null
      done()
    })
  })
  it('should display pause button when game is running', (done) => {
    vm.$store.dispatch('setState', 'running')
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('#btnPause')).to.not.be.null
      expect(vm.$el.querySelector('#btnContinue')).to.be.null
      done()
    })
  })
  it('should display continue button when the game is paused', (done) => {
    vm.$store.dispatch('setState', 'paused')
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('#btnPause')).to.be.null
      expect(vm.$el.querySelector('#btnContinue')).to.not.be.null
      done()
    })
  })
})
