<template>
    <div id="lives">
        <div v-for="index in livesLeft"
             class="life">:-)</div>
    </div>
</template>

<style>
    #lives {
        border: solid 1px green;
        display: flex;
    }
    .life {
        background-color:black;
        color: yellow;
        padding-left: 2px;
        padding-right: 2px;
    }
</style>
<script>
  export default {
    name: 'lives',
    data () {
      return {
        maxLives: 10
      }
    },
    computed: {
      livesLeft: function () {
        return this.$store.getters.getLives
      }
    },
    watch: {
      livesLeft: function (lives) {
        if (lives === 0) {
          this.$store.dispatch('setState', 'finished')
        }
      }
    }
  }
</script>