<template>
<div>
  <hello></hello>
  <ul>
    <li v-for="(element, index) in messages">{{element}}</li>
  </ul>
</div>
</template>

<script>
import Hello from 'components/Hello'
import {hz} from '../hz'

export default {
  name: 'dashboard',
  components: {
    Hello
  },
  data () {
    return {
      messages: []
    }
  },
  mounted () {

    hz.connect();
    
    hz.onReady().subscribe(
      () => {
          this.messages.push("Connected to Horizon server!")
      }
    );
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {

  margin: 0 10px;
}
</style>
