import Vue from 'vue'
import store from '@/store/store'
import InputField from '@/components/InputField.vue'
import WordArea from '@/components/WordArea.vue'

describe('InputField.vue', () => {
  let vm
  beforeEach(function () {
    const Component = Vue.extend(InputField)
    vm = new Component({
      store: store
    }).$mount()
  })
  it('should have a getWordIndex method', () => {
    expect(vm.getWordIndex).to.be.a('function')
  })
  it('should return the correct index of a word with getWordIndex method', () => {
    const WAComponent = Vue.extend(WordArea)
    const WAvm = new WAComponent({
      store: store
    }).$mount()

    WAvm.addNewWordToScreen('Henk')
    WAvm.addNewWordToScreen('Toad')
    WAvm.addNewWordToScreen('Monkey')
    WAvm.addNewWordToScreen('Snail')
    const index = vm.getWordIndex('Monkey')
    expect(index).to.equal(2)
  })
})
