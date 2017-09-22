import { getters } from '@/store/modules/game'
// const {getWordIndex} = getters

describe('getWordIndex', () => {
  it('returns the index of the word item by word', () => {
    expect(getters.getWordIndex).to.be.a('function')
    const state = {
      wordsOnScreen: [{'word': 'Monkey'}, {'word': 'Horse'}, {'word': 'Snail'}]
    }

    expect(state.wordsOnScreen.length).to.equal(3)
    const wordIndex = getters.getWordIndex(state, 'Horse')
    expect(wordIndex).to.equal(1)
  })
})
