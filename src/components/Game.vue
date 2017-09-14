<template>
    <div id="game">
        <word-area></word-area>
        <div id="interface">
            <input-field></input-field>
            <score></score>
            <lives></lives>
        </div>
        <div id="overlay">
            <div v-if="gameState == 'welcome'"><h2>Welcome</h2>
                <span>Press the start button to start the game...</span>
                <button id="btnStart" v-on:click="startGame">Start</button>
            </div>
            <div v-if="gameState == 'running'">
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
    </div>
</template>
<style>
    #game {
        width: 100%;
        height: 100vh;
        border: solid 1px black;
    }
    #interface {
        display: flex;
        justify-content: space-around;
    }
</style>
<script>
  import WordArea from '../components/WordArea'
  import InputField from '../components/InputField'
  import Score from '../components/Score.vue'
  import Lives from '../components/Lives.vue'

  export default {
    name: 'game',
    components: {WordArea, InputField, Score, Lives},
    data () {
      return {
        state: 'welcome' /* welcome running paused finished */
      }
    },
    computed: {
      gameState: function () {
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