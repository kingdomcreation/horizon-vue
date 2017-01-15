<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <router-view id="app" class="body" keep-alive transition transition-mode="out-in">
</template>

<script>
import store from 'src/vuex/store'
import {hz} from 'src/hz'
export default {
  store
}
</script>
