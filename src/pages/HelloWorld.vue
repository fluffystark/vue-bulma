<template>
  <div class="columns fixed-sidebar is-centered">
    <div class="column is-one-fifth has-background-light">
      
    </div>
    <div class="column is-two-fifths">
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-parent">
          <QuestionCard class="tile is-child" />
          <QuestionCard class="tile is-child" />
          <QuestionCard class="tile is-child" />
          <QuestionCard class="tile is-child" />
        </div>
      </div>    
    </div>
  </div>
</template>

<script>
import QuestionCard from '../components/feed/QuestionCard.vue'
export default {
  name: 'HelloWorld',
  components: {
    QuestionCard
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
