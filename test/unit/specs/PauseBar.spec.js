import Vue from 'vue'
import store from '@/store/store'
import PauseBar from '@/components/PauseBar'
function deepClone (obj) {
  let cloned = Object.assign({}, obj) //  new {a:1, b:2, c:3};
  return cloned
}
const initialState = deepClone(store.state)

describe('PauseBar.vue (welcome state)', () => {
  afterEach(() => {
    store.replaceState(initialState)
  })

  it('should have a pause method', () => {
    const Component = Vue.extend(PauseBar)
    const vm = new Component({
      store: store
    }).$mount()
    expect(vm.pauseGame).to.be.a('function')
  })
  it('should have a continue method', () => {
    const Component = Vue.extend(PauseBar)
    const vm = new Component({
      store: store
    }).$mount()
    expect(vm.continueGame).to.be.a('function')
  })
  it('should NOT display pause or continue button when game is NOT running', (done) => {
    const Component = Vue.extend(PauseBar)
    const vm = new Component({
      store: store
    }).$mount()
    vm.$store.dispatch('setState', 'welcome')
    Vue.nextTick(() => {
      expect(document.querySelectorAll('#btnPause').length).to.equal(0)
      expect(document.querySelectorAll('#btnContinue').length).to.equal(0)
      done()
    })
  })
  it('should display pause button when game is running', (done) => {
    const Component = Vue.extend(PauseBar)
    const vm = new Component({
      store: store
    }).$mount()
    vm.$store.dispatch('setState', 'running')
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('#btnPause')).to.not.be.null
      expect(vm.$el.querySelector('#btnContinue')).to.be.null
      done()
    })
  })
  it('should display continue button when the game is paused', (done) => {
    const Component = Vue.extend(PauseBar)
    const vm = new Component({
      store: store
    }).$mount()
    vm.$store.dispatch('setState', 'paused')
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('#btnPause')).to.be.null
      expect(vm.$el.querySelector('#btnContinue')).to.not.be.null
      done()
    })
  })
})
