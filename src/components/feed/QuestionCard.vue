<template>
  <div class="card content-bordered">
    <div class="card-content is-paddingless">
      <div class="hero is-bold ">
        <div class="hero-head">
        </div>
        <div class="hero-body has-text-centered">
          <p class="title">Is drinking good for drowning all your sorrows away?</p>
          <div class="columns is-centered">
                <div class="tags">
                  <span class="tag is-primary">drinking</span>
                  <span class="tag is-primary">depression</span>
                  <span class="tag is-primary">advice</span>                
                </div>
          </div>
        </div>
        <div class="hero-foot">
          <div class="level more-details">
            <div class="level-left">
              <div class="level-item">
                <p><font-awesome-icon icon="comment-alt" />13</p>
              </div>
              <div class="level-item">
                <p><font-awesome-icon icon="heart" />13</p>
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
                  </article>
                </div>
                <div class="level-right">
                    <div class="level-item">
                      <button class="button is-large like">
                        <span class="icon has-text-grey">
                          <font-awesome-icon icon="comment-alt" />
                        </span>
                      </button>
                    </div>
                    <div class="level-item">
                      <button class="button is-large like">
                        <span class="icon has-text-grey">
                          <font-awesome-icon icon="heart" />
                        </span>
                      </button>
                    </div>
                    <div class="level-item">
                      <button class="button is-large like">
                        <span class="icon has-text-grey">
                          <font-awesome-icon icon="ban" />
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

  .more-details {
    margin: 4px 24px;
  }

  .fixed-sidebar {
    margin: 0px;
    height: calc(100vh - 3.25rem);
  }

  .like {
    transform: translate(-50%, -80%);
    border-radius: 50px;
  }

  .content-bordered {
    border: 1px solid $primary;
  }

  .bottom-primary {
    border-bottom: 1px solid $primary;
  }

  .level-item > p > svg {
    margin-right: 8px;
  }

</style>
