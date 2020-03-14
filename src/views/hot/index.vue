<template>
  <movie-list></movie-list>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('getList', 'in_theaters')
  }
}
</script>

<style>

</style>
