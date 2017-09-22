import { mutations } from '@/store/modules/game'
const {removeWord} = mutations
const {advanceWordsOnScreen} = mutations

describe('removeWord', () => {
  it('removes Word item with word "Monkey" from wordsOnScreen', () => {
    expect(removeWord).to.be.a('function')
    const state = {
      wordsOnScreen: [{'x': 0, 'y': 0, 'speed': 0, 'word': 'Monkey', 'score': 0}, {
        'x': 0,
        'y': 0,
        'speed': 0,
        'word': 'Horse',
        'score': 0
      }]
    }

    expect(state.wordsOnScreen.length).to.equal(2)
    removeWord(state, 'Monkey')
    expect(state.wordsOnScreen.length).to.equal(1)
  })
})

describe('advanceWordsOnScreen', () => {
  it('increases the x position of each word by it\'s speed', () => {
    expect(advanceWordsOnScreen).to.be.a('function')
    const state = {
      wordsOnScreen: [{'x': 0, 'speed': 10, 'word': 'Monkey'}, {
        'x': 0,
        'speed': 50,
        'word': 'Horse'
      }]
    }
    advanceWordsOnScreen(state)
    expect(state.wordsOnScreen[0]).to.deep.equal({'x': 10, 'speed': 10, 'word': 'Monkey'})
    expect(state.wordsOnScreen[1]).to.deep.equal({'x': 50, 'speed': 50, 'word': 'Horse'})
  })
})
