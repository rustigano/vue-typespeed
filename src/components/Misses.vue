<template>
    <div id="misses">
        Misses: {{ missed }}
    </div>
</template>

<style>
    #misses {
        border: solid 1px blue;
    }
</style>

<script>
  export default {
    name: 'misses',
    computed: {
      missed: function () {
        return this.$store.getters.getMisses
      }
    }
  }
</script>