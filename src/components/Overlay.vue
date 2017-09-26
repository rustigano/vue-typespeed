<template>
    <div id="overlay">
        <div v-if="gameState == 'welcome'"><h2>Welcome to typespeed</h2>
            <span>Press the start button to start the game...</span>
            <button id="btnStart" v-on:click="startGame">Start</button>
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

    #overlay > div {
        padding: 3vh;
        text-align: center;
        background-color: white;
    }
</style>

<script>
  export default {
    name: 'overlay',
    computed: {
      gameState: function () {
        return this.$store.getters.getState
      },
      score: function () {
        return this.$store.getters.getScore
      }
    },
    methods: {
      startGame: function (event) {
        this.$store.dispatch('setState', 'running')
      },
      resetGame: function (event) {
        this.$store.dispatch('resetWords')
        this.$store.dispatch('setScore', 0)
        this.$store.dispatch('resetLives')
        this.$store.dispatch('resetMisses')
        this.$store.dispatch('setState', 'welcome')
      }
    }
  }
</script>