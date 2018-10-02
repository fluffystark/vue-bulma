<template>
  <div id="app" class="has-background-white-bis">
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
