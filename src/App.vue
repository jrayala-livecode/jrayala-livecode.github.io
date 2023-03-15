<script>
import { RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue';


export default {
  components: {
    RouterView,
    SideBar
  }
}

</script>

<template>
  <side-bar></side-bar>
  <div id="wrapper">
    <RouterView />
  </div>
</template>

<style scoped>

</style>
