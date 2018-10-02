<template>
  <div class="box">
    <aside class="content has-text-centered">
      <h3 class="is-3">Leaderboard</h3>
      <ul class="trend-list">
        <li>
          <p class="title is-6 has-text-primary">
            @gichaelmao
          </p>
          <p class="subtitle is-6 has-text-grey-dark">4 Questions | 10 answers</p>
        </li>
        <li>
          <p class="title is-6 has-text-primary">
            @isanananan
          </p>
          <p class="subtitle is-6 has-text-grey-dark">4 Questions | 10 answers</p>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'LeaderBoard',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="scss">

  @import '../../assets/sass/main.scss';

  $box-padding: 0rem;

  .no-padding {
    border-radius: 6px;
    padding: $box-padding;
  }

  .fixed-sidebar {
    margin: 0px;
    height: calc(100vh - 3.25rem);
  }

  .like {
    transform: translate(-50%, -80%);
    border-radius: 50px;
  }

  .trend-list {
    list-style: none !important;
    margin: 0px !important;
  }

  .content li + li {
    margin-top: .5em;
  }

</style>
