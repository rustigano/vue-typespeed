<template>
    <div id="overlay">
        <div v-if="gameState == 'welcome'"><h2>Welcome</h2>
            <span>Press the start button to start the game...</span>
            <button id="btnStart" v-on:click="startGame">Start</button>
        </div>
        <div v-if="gameState == 'running'"  class="semiTransparent">
            <button id="btnPause" v-on:click="pauseGame">Pause</button>
        </div>
        <div v-if="gameState == 'paused'"><h2>Game paused</h2>
            <button id="btnContinue" v-on:click="continueGame">Continue</button>
        </div>
        <div v-if="gameState == 'finished'"><h2>Game over</h2>
            <span>Score : {{ score }}</span>
            <button id="btnReset" v-on:click="resetGame">Continue</button>
        </div>
    </div>
</template>
<style scoped>
    #overlay {
        display: flex;
        align-items: center;
        justify-content: center;
        top: 8vh;
        width: 100%;
        position: absolute;
    }
    #overlay>div {
        padding: 3vh;
        text-align: center;
        background-color: white;
    }
    .semiTransparent {
        opacity: 0.5;
    }
</style>

<script>
  export default {
    name: 'overlay',
    computed: {
      gameState: function () {
        console.log(this.$store)
        return this.$store.getters.getState
      },
      score: function () {
        return this.$store.getters.getScore
      }
    },
    methods: {
      resetGame: function (event) {
        this.$store.dispatch('resetWords')
        this.$store.dispatch('setScore', 0)
        this.$store.dispatch('resetLives')
        this.$store.dispatch('resetMisses')
        this.$store.dispatch('setState', 'welcome')
      },
      startGame: function (event) {
        this.$store.dispatch('setState', 'running')
      },
      pauseGame: function (event) {
        this.$store.dispatch('setState', 'paused')
      },
      continueGame: function (event) {
        this.$store.dispatch('setState', 'running')
      }
    }
  }
</script>