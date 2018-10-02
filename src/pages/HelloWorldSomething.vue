<template>
  <div class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="box">
          <div class="columns">
            <div class="column"></div>
            <div class="column"></div>
          </div>
        </div>
          <label class="label=">USERNAME or EMAIL</label>
          <input class="input" type="text" placeholder="Text input">
          <label class="label=">PASSWORD</label>
          <input class="input" type="password" placeholder="Text input">        
      </div>        
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
