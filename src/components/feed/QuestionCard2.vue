<template>
  <div class="box is-primary">
    <article class="hero ">
      <div class="hero-head">
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <div class="tags">
                <span class="tag">drinking</span>
                <span class="tag">depression</span>
                <span class="tag">advice</span>                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-body has-text-centered">
        <p class="title">Is drinking good for drowning all your sorrows away?</p>
      </div>
      <div class="hero-foot">
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <p>13 answers</p>
            </div>
          </div>
        </div>
      </div>
    </article>
    <article class="media">
      <figure class="media-left">
        <p class="image is-32x32">
          <img src="https://bulma.io/images/placeholders/128x128.png">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>John Smith</strong> <small>@johnsmith</small>
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'QuestionCard2',
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



</style>
