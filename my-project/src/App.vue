<template>
  <div id="app">
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>

<script>
import footer from '@/components/footer/footer'
export default {
  name: 'App',
  components:{
    'v-footer':footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 0.24rem
}
</style>
