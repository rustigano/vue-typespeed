<template>
    <div id="lives">
        <transition-group name="list" tag="p">
            <span v-for="smiley in smileys"
                  v-bind:key="smiley"
                  class="list-item">{{ smiley }}</span>
        </transition-group>
    </div>
</template>

<style>
    #lives {
        border: solid 1px green;
        display: flex;
    }

/*    .life {
        background-color: black;
        color: yellow;
        padding-left: 2px;
        padding-right: 2px;
    }*/

    .list-item {
        background-color: black;
        color: yellow;
        padding-left: 2px;
        padding-right: 2px;

        display: inline-block;
        margin-right: 10px;
    }

    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }

    .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */
    {
        opacity: 0;
        transform: translateY(30px);
    }

</style>
<script>
  export default {
    name: 'lives',
    data () {
      return {
        smileys: []
      }
    },
    computed: {
      livesLeft: function () {
        return this.$store.getters.getLives
      }
    },
    watch: {
      livesLeft: function (lives) {
        this.adjustSmileys()
        if (lives === 0) {
          this.$store.dispatch('setState', 'finished')
        }
      }
    },
    mounted () {
      this.addSmileys(this.livesLeft)
    },
    methods: {
      adjustSmileys: function () {
        if (this.livesLeft > this.smileys.length) {
          this.addSmileys(this.livesLeft - this.smileys.length)
        } else if (this.livesLeft < this.smileys.length) {
          this.removeSmileys(this.smileys.length - this.livesLeft)
        }
      },
      addSmileys: function (n) {
        for (var i = 0; i < n; i++) {
          this.smileys.splice(0, 0, ':-)')
        }
      },
      removeSmileys: function (n) {
        this.smileys.splice(0, n)
      }
    }
  }
</script>