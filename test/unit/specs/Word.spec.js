import Vue from 'vue'
import store from '@/store/store'
import Word from '@/components/Word'

describe('Word.vue', () => {
  it('should receive a word object literal as a prop', () => {
    const Component = Vue.extend(Word)
    const vm = new Component({
      store: store,
      propsData: {
        word: {'x': 0, y: 10, 'speed': 10, 'word': 'Monkey'}
      }
    }).$mount()
    expect(vm.word).to.be.a('object')
  })
})
