<template>
  <div id="app">
    <!-- <SplitePane msg="Welcome to Your Vue.js App"/> -->
    <router-view>
      <!-- <router-view /> -->
    </router-view>
  </div>
</template>

<script>
// import SplitePane from './components/splitePane'

export default {
  name: 'app',
  data(){
    return {

    }
  },
  watch: {},
  created() {},
  methods: {},
  computed: {}
  // components: {
  //   SplitePane
  // }
}
</script>

<style lang="scss">
html,body{
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  z-index: 1;
}
</style>
