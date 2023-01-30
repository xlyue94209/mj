<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Mj/>
  </div>
</template>

<script>
import Mj from './components/Mj'

export default {
  name: 'App',
  components: {
    Mj
  },//注册
  // components: { Data },//注册
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  /*margin-top: 60px;*/
}
</style>
