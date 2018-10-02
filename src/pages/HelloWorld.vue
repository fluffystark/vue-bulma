<template>
  <div class="container">
  <div class="columns fixed-sidebar is-centered">
    <div class="column is-3">
      <SideBar />
    </div>
    <div class="column is-6">
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-parent">
          <QuestionCard class="tile is-child" />
          <QuestionCard class="tile is-child" />
          <QuestionCard class="tile is-child" />
          <QuestionCard class="tile is-child" />
        </div>
      </div>    
    </div>
    <div class="column is-3 has-background-light"></div>
  </div>
  </div>
</template>

<script>
import QuestionCard from '../components/feed/QuestionCard.vue'
import SideBar from '../components/feed/SideBar.vue'
export default {
  name: 'HelloWorld',
  components: {
    QuestionCard,
    SideBar
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="scss">

  .fixed-sidebar {
    margin: 0px;
    height: calc(100vh - 3.25rem);
  }

</style>
