<template>
  <div class="box">
    <aside class="content">
      <h3 class="is-3">Trending</h3>
      <ul class="trend-list">
        <li>
          <p class="title is-6 has-text-primary trend-tag">
            #depression
          </p>
          <p class="subtitle is-6 has-text-grey-dark">10 questions</p>
        </li>
        <li>
          <p class="title is-6 has-text-primary trend-tag">
            #alcohol
          </p>
          <p class="subtitle is-6 has-text-grey-dark">5 questions</p>
        </li>
        <li>
          <p class="title is-6 has-text-primary trend-tag">
            #school
          </p>
          <p class="subtitle is-size-6 has-text-grey-dark">1 question</p>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="scss">

  @import '../../assets/sass/main.scss';

  .trend-tag {
    font-weight: 500;
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
