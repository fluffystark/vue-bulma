<template>
  <div class="container">
  <div class="columns fixed-sidebar is-centered">
    <div class="column is-3">
      <SideBar />
      <FollowMe />
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
    <div class="column is-3">
      <Quest />
      <LeaderBoard />
    </div>
  </div>
  </div>
</template>

<script>
import QuestionCard from '../components/feed/QuestionCard.vue'
import SideBar from '../components/feed/SideBar.vue'
import Quest from '../components/feed/Quest.vue'
import LeaderBoard from '../components/feed/LeaderBoard.vue'
import FollowMe from '../components/feed/FollowMe.vue'
export default {
  name: 'HelloWorld',
  components: {
    QuestionCard,
    SideBar,
    Quest,
    LeaderBoard,
    FollowMe
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
