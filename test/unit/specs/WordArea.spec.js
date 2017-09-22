import Vue from 'vue'
// import Vuex from 'vuex'
import store from '@/store/store'
import WordArea from '@/components/WordArea.vue'

describe('WordArea.vue wordFactory', () => {
  it('should have a wordFactory method', () => {
    const Component = Vue.extend(WordArea)
    const vm = new Component({
      store: store
    }).$mount()

    expect(vm.wordFactory).to.be.a('function')
  })
  it('should return a word object literal from the wordFactory', () => {
    const Component = Vue.extend(WordArea)
    const vm = new Component({
      store: store
    }).$mount()

    expect(vm.wordFactory).to.be.a('function')
    const wordItem = vm.wordFactory('Monkey')
    expect(wordItem).to.be.a('object')

    expect(wordItem.word).to.equal('Monkey')
    expect(wordItem.speed).to.be.gte(5)
    expect(wordItem.speed).to.be.lte(56)
  })
})
