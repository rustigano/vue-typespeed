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
            let word = this.$store.getters.getWordByIndex(i)
            let w = this.$store.getters.gameScreenWidth
            let score = word.score * (100 - (word.x / w / 100)) / 100
            this.$store.dispatch('addToScore', score)
            this.$store.dispatch('removeWordByIndex', i)
          } else {
            this.$store.dispatch('addMiss')
            // console.log('hmm...')
          }
          this.typedWord = ''
        }
      }

    }
  }
</script>