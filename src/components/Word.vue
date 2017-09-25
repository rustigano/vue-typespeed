<template>
    <div class="word"
         v-bind:style="{ top: word.y + 'px', left: word.x + 'px', color: wordColor}">
        {{ word.word }}
    </div>
</template>
<style scoped>
    div.word {
        position: absolute;
        color: lawngreen;
        top: 0px;
        left: 0px;
    }
</style>
<script>
  export default {
    name: 'word',
    props: ['word'],
    computed: {
      wordColor: function () {
        const sw = this.$store.getters.getGameScreenWidth
        if (this.word.x < sw / 2) {
          return 'lawngreen'
        } else if (this.word.x < sw * 0.75) {
          return 'yellow'
        } else {
          return 'red'
        }
      }
    }
  }
</script>