<template>
    <p>
        Score: <span>{{ points }}</span>
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
    name: 'score',
    computed: {
      points: function () {
        return this.$store.getters.getScore
      }
    }
  }
</script>