<template>
  <div id="app">
      <h2>Vuejs - select cascate with component</h2>
      <div>
      
        <control message="Props Control"></control>

      </div>
  </div>
</template>

<script>

import control from './components/control.vue'

export default {
  name: 'app',
  components: {
    control
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  padding: 0;
}

li {
  display: inline-block;
  margin: 1 7px;
}

</style>
