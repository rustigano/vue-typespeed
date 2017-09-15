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
          this.inputDisabled = false
          this.$nextTick(() => {
            this.$refs.wordInputField.focus()
          })
        } else {
          // console.log('stop met woorden maken en updaten')
          this.inputDisabled = true
        }
      }
    },
    methods: {
      submitWord: function () {
        // console.log(this.typedWord)
        let i = this.$store.getters.getWordIndex(this.typedWord)

        if (i > -1) {
          let word = this.$store.getters.getWordByIndex(i)

          let score = Math.floor((word.speed * word.word.length) / 5)
          this.$store.dispatch('addToScore', score)
          this.$store.dispatch('removeWordByIndex', i)
          this.typedWord = ''
          // console.log('woord goed')
        } else {
          console.log('hmm...')
        }
      }

    }
  }
</script>