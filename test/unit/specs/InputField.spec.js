import Vue from 'vue'
import store from '@/store/store'
import InputField from '@/components/InputField.vue'
import WordArea from '@/components/WordArea.vue'

describe('InputField.vue', () => {
  it('should have a getWordIndex method', () => {
    const Component = Vue.extend(InputField)
    const vm = new Component({
      store: store
    }).$mount()
    expect(vm.getWordIndex).to.be.a('function')
  })
  it('should return the index of a word with getWordIndex method', () => {
    const Component = Vue.extend(InputField)
    const vm = new Component({
      store: store
    }).$mount()

    // store.getters.getWordsOnScreen

    const WAComponent = Vue.extend(WordArea)
    const WAvm = new WAComponent({
      store: store
    }).$mount()

    WAvm.addNewWordToScreen('Henk')
    WAvm.addNewWordToScreen('Toad')
    WAvm.addNewWordToScreen('Monkey')
    WAvm.addNewWordToScreen('Snail')
    //  const wordItem = WAvm.wordFactory('Monkey')
    //  expect(wordItem).to.be.a('object')
    const index = vm.getWordIndex('Monkey')
    expect(index).to.equal(2)
  })
})
