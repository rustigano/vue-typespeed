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
    data: function () {
      return {
        sw: 0
      }
    },
    props: ['word'],
    mounted () {
      this.sw = this.$store.getters.getGameScreenWidth
    },
    computed: {
      wordColor: function () {
        if (this.word.x < this.sw / 2) {
          return 'lawngreen'
        } else if (this.word.x < this.sw * 0.75) {
          return 'yellow'
        } else {
          return 'red'
        }
      }
    }
  }
</script>