<template>
  <div id="app">
    <div class="text-center mt-">
        <AppNavbar />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import AppNavbar from './app-components/AppNavbar.vue'

export default {
  name: 'App',
  components: {
    AppNavbar
  },
  methods: {
    test(){
      console.log("Router", this.$router)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
