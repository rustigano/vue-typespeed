import Vue from 'vue'
import store from '@/store/store'
import Overlay from '@/components/Overlay'

describe('Overlay.vue', () => {
  let vm
  beforeEach(function () {
    const Component = Vue.extend(Overlay)
    vm = new Component({
      store: store
    }).$mount()
  })
  it('should have a resetGame method', () => {
    expect(vm.resetGame).to.be.a('function')
  })
  it('should have a startGame method', () => {
    expect(vm.startGame).to.be.a('function')
  })

  it('should display welcome message and start button when gameState is "welcome"', (done) => {
    vm.$store.dispatch('setState', 'welcome')
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('h2').textContent).to.equal('Welcome to typespeed')
      expect(vm.$el.querySelector('#btnStart')).to.not.be.null
      done()
    })
  })
  it('should display Game over message and continue button when gameState is "finished"', (done) => {
    vm.$store.dispatch('setState', 'finished')
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('h2').textContent).to.equal('Game over')
      expect(vm.$el.querySelector('#btnReset')).to.not.be.null
      done()
    })
  })
})
