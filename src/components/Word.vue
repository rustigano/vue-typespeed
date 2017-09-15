<template>
    <div class="word"
         v-bind:style="{ top: word.y + 'px', left: word.x + 'px', color: wordColor }">
        {{ word.word }}
    </div>
</template>
<style>
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
        let w = this.$store.getters.getGameScreenWidth
        if (this.word.x < w / 2) {
          return 'lawngreen'
        } else if (this.word.x < w * 0.75) {
          return 'yellow'
        } else {
          return 'red'
        }
      }
    }
  }
</script>