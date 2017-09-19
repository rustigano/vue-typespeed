<template>
    <div id="game">

        <word-area></word-area>
        <div id="interface">
            <input-field></input-field>
            <score></score>
            <misses></misses>
            <lives></lives>
        </div>
        <Overlay></Overlay>

    </div>
</template>
<style>
    #game {
        width: 100%;
        height: 100vh;
        background-color: black;
    }
    #interface {
        border-top: 1px solid purple;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
    }
</style>
<script>
  import Overlay from '../components/Overlay'
  import WordArea from '../components/WordArea'
  import InputField from '../components/InputField'
  import Score from '../components/Score'
  import Lives from '../components/Lives'
  import Misses from '../components/Misses'

  export default {
    name: 'game',
    components: {
      Overlay,
      WordArea,
      InputField,
      Score,
      Lives,
      Misses
    }
  }
</script>