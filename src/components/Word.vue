<template>
    <div class="word"
         v-bind:style="{ top: word.y + 'px', left: word.x + 'px' }">
        {{ word.word }}
    </div>
</template>
<style>
    div.word {
        position: absolute;
        top: 0px;
        left: 0px;
    }
</style>
<script>
  export default {
    name: 'word',
    props: ['word'],
    data () {
      return {
        wordValue: 10
      }
    }
  }
</script>