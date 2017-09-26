<template>
    <div id="pauseBar">
        <div v-if="gameState == 'paused'">
            <span>Game is paused, press the button to continue the game...</span>
            <button id="btnContinue" v-on:click="continueGame">Continue</button>
        </div>
        <div v-if="gameState == 'running'">
            <button id="btnPause" v-on:click="pauseGame">Pause game</button>
        </div>
    </div>
</template>

<style scoped>
    #pauseBar {
        width: 100%;
        position: relative;
        background-color: #CDDC39
    }
    #pauseBar > div {
        text-align: center;
    }

</style>
<script>
  export default {
    name: 'pausebar',
    computed: {
      gameState: function () {
        return this.$store.getters.getState
      }
    },
    methods: {
      pauseGame: function (event) {
        this.$store.dispatch('setState', 'paused')
      },
      continueGame: function (event) {
        this.$store.dispatch('setState', 'running')
      }
    }
  }
</script>