<template>
    <div id="score">
       Score: {{ points }}
    </div>
</template>

<style>
    #score {
        border: solid 1px orange;
    }
</style>

<script>
  export default {
    name: 'score',
    computed: {
      points: function () {
        return this.$store.getters.getScore
      }
    }
  }
</script>