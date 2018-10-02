<template>
  <div class="box">
      <h4 class="title is-size-4 trend-tag">Who to Follow?</h4>
      <article class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
          </figure>
        </div>
          <div class="media-content">
            <div class="content">
              <p class="is-size-6">
                <strong class="has-text-primary">@johnmatt</strong>
                <br>
                12 answers
              </p>
            </div>    
          </div>
          <div class="media-right">
            <button class="button">Follow</button>
          </div>
      </article>
      <article class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
          </figure>
        </div>
          <div class="media-content">
            <div class="content">
              <p class="is-size-6">
                <strong class="has-text-primary">@johnmatt</strong>
                <br>
                12 answers
              </p>
            </div>    
          </div>
          <div class="media-right">
            <button class="button">Follow</button>
          </div>
      </article>
      <article class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
          </figure>
        </div>
          <div class="media-content">
            <div class="content">
              <p class="is-size-6">
                <strong class="has-text-primary">@johnmatt</strong>
                <br>
                12 answers
              </p>
            </div>    
          </div>
          <div class="media-right">
            <button class="button">Follow</button>
          </div>
      </article>
  </div>
</template>

<script>
export default {
  name: 'FollowMe',
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
