<template>
    <input  ref="wordInputField"
            v-model="typedWord"
            :disabled="inputDisabled"
            @keyup.enter="submitWord"
            placeholder="type here">
</template>

<script>
  export default {
    name: 'inputField',
    data () {
      return {
        typedWord: '',
        inputDisabled: true
      }
    },
    computed: {
      gameState: function () {
        return this.$store.getters.getState
      }
    },
    watch: {
      gameState: function (gameStateIn) {
        if (gameStateIn === 'running') {
          // console.log('maak woorden en update', this.loopTimeout)
          this.typedWord = ''
          this.inputDisabled = false
          this.$nextTick(() => {
            this.$refs.wordInputField.focus()
          })
        } else {
          this.typedWord = ''
          // console.log('stop met woorden maken en updaten')
          this.inputDisabled = true
        }
      }
    },
    methods: {
      submitWord: function () {
        if (this.typedWord !== '') {
          let i = this.$store.getters.getWordIndex(this.typedWord)
          if (i > -1) {
            let points = this.getScore(i)
            this.$store.dispatch('addToScore', points)
            this.$store.dispatch('removeWordByIndex', i)
          } else {
            this.$store.dispatch('addMiss')
            // console.log('hmm...')
          }
          this.typedWord = ''
        }
      },
      getScore: function (i) {
        let word = this.$store.getters.getWordByIndex(i)
        let sw = this.$store.getters.getGameScreenWidth
        let x = word.x
        // console.log(sw, x)
        if (x > sw) x = sw
        let percent = x / (sw / 100)
        if (percent === 100) percent = 99
        let points = Math.ceil((word.score * (100 - percent)) / 100)
        // console.log(points)
        return points
      }

    }
  }
</script>