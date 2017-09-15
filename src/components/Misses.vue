<template>
    <p>
        Misses: <span>{{ missed }}</span>
    </p>
</template>

<style scoped>
    p {
        color: white;
    }
    span {
        color: deepskyblue;
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