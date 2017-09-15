<template>
    <div id="word-area">
        <word v-for="word in words"
              v-bind:key="word.word"
              :word="word">
        </word>
    </div>
</template>

<style>
    #word-area {
        height: 300px;
        position: relative;
        overflow-x: hidden;
    }
</style>

<script>
  import Word from '../components/Word.vue'

  export default {
    name: 'wordArea',
    components: {Word},
    data () {
      return {
        dictionary: ['er', 'was', 'eens', 'een', 'meisje', 'met', 'de', 'naam', 'Roodkapje', 'grote', 'boze', 'wolf', 'sprookje', 'bos', 'grootmoeder', 'apekool', 'koekebakker', 'flierefluiter', 'appelflap', 'gans', 'hoi', 'kanarie', 'kabouter', 'stoeptegel'],
        loopTimeout: 0,
        updateInterval: 500,
        createNewWordWhen: 0
      }
    },
    computed: {
      words: function () {
        return this.$store.getters.getWordsOnScreen
      },
      gameState: function () {
        return this.$store.getters.getState
      }
    },
    watch: {
      gameState: function (gameStateIn) {
        if (gameStateIn === 'running') {
          // console.log('maak woorden en update', this.loopTimeout)
          if (this.loopTimeout === 0) this.doLoop()
          this.createNewWordWhen = Date.now() + 3000
        } else {
          // console.log('stop met woorden maken en updaten')
          if (this.loopTimeout !== 0) this.stopLoop()
        }
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.$store.dispatch('setGameScreenWidth', this.$el.clientWidth)
      })
    },
    methods: {
      wordFactory: function (word) {
        let y = this.words.length * 15
        let speed = Math.ceil(Math.random() * 50) + 5
        let score = Math.floor((word.speed * word.length))
        return {'x': 0, 'y': y, 'speed': speed, 'word': word, 'score': score}
      },
      generateWord: function () {
        let randomWordIndex = parseInt(Math.random() * this.dictionary.length)
        return this.dictionary[randomWordIndex]
      },
      isWordOnScreen: function (w) {
        return (this.words.findIndex(word => word.word === w) > -1)
      },
      addNewWordToScreen: function (w) {
        let wordObject = this.wordFactory(w)
        this.$store.dispatch('addWord', wordObject)
      },
      doLoop: function () {
        this.loopTimeout = setTimeout(() => {
          this.$store.dispatch('advanceWordsOnScreen')
          this.checkForOffscreenWords()
          if (this.createNewWordWhen < Date.now()) {
            let w = this.generateWord()
            if (!this.isWordOnScreen(w)) {
              this.addNewWordToScreen(w)
            }
            this.createNewWordWhen = Date.now() + 3000
          }

          this.doLoop()
        }, this.updateInterval)
      },
      stopLoop: function () {
        clearTimeout(this.loopTimeout)
        this.loopTimeout = 0
      },
      checkForOffscreenWords: function () {
        let i = this.words.length
        let screenWidth = this.$store.getters.getGameScreenWidth
        while (i--) {
          let word = this.$store.getters.getWordByIndex(i)

          if (word.x > screenWidth) {
            this.$store.dispatch('removeWordByIndex', i)
            this.$store.dispatch('die')
          }
        }
      }
    }
  }
</script>