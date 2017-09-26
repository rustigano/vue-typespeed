import Vue from 'vue'
import store from '@/store/store'
import WordArea from '@/components/WordArea.vue'

describe('WordArea.vue wordFactory', () => {
  let vm
  beforeEach(function () {
    const Component = Vue.extend(WordArea)
    vm = new Component({
      store: store
    }).$mount()
  })
  it('should have a wordFactory method', () => {
    expect(vm.wordFactory).to.be.a('function')
  })
  it('should return a word object literal from the wordFactory', () => {
    expect(vm.wordFactory).to.be.a('function')
    const wordItem = vm.wordFactory('Monkey')
    expect(wordItem).to.be.a('object')
    expect(wordItem.word).to.equal('Monkey')
    expect(wordItem.speed).to.be.gte(5)
    expect(wordItem.speed).to.be.lte(56)
  })
})
