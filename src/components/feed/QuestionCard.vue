<template>
  <div class="card">
    <div class="card-content is-paddingless">
      <div class="hero is-bold is-primary">
        <div class="hero-head">
        </div>
        <div class="hero-body has-text-centered">
          <p class="title">Is drinking good for drowning all your sorrows away?</p>
          <div class="columns is-centered">
                <div class="tags">
                  <span class="tag is-white">drinking</span>
                  <span class="tag is-white">depression</span>
                  <span class="tag is-white">advice</span>                
                </div>
          </div>
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
      </div>
    </div>
    <div class="card-footer">
      <div class="card-footer-item">
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <div class="tile is-child">
              <div class="level">
                <div class="level-left">
                  <div class="level-item">
                    <figure class="image is-32x32">
                      <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                    </figure>
                  </div>
                  <div class="level-item">
                    <p>
                      @johnmatt
                    </p> 
                  </div>
                </div>
                <div class="level-right">
                    <div class="level-item">
                      <button class="button is-large like">
                        <span class="icon has-text-danger">
                          <font-awesome-icon icon="heart" />
                        </span>
                      </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionCard',
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

</style>
