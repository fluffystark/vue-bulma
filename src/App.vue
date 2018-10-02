<template>
  <div id="app">
    <TheNavBar class="is-primary" />
    <router-view/>
  </div>
</template>

<script>
import TheNavBar from './TheNavBar.vue'
export default {
  name: 'App',
  components: {
    TheNavBar
  }
}
</script>
