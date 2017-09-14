<template>
    <input
            v-model="typedWord"
            @keyup.enter="submitWord"
            placeholder="type here">
</template>

<script>
  export default {
    name: 'inputField',
    data () {
      return {
        typedWord: ''
      }
    },
    methods: {
      wordOnScreenIndex: function (w) {
        return this.wordsOnScreen.findIndex(word => word.word === w)
      },
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