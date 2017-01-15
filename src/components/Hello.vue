<template>
  <div class="hello">
    <img src="../assets/vue-logo.png">
    <img src="../assets/horizon-logo.png">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',

  data () {
    return {
      title: 'Welcome to your realtime App using Vue.js and Horizon'
    }
  }
  
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
