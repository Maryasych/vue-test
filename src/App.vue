<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg static-top mt-5">
      <div class="container-fluid">
        <router-link to="/"><img src="./assets/logo.png" alt=""></router-link>
        <button class="navbar-toggler navbar-light" type="button" data-toggle="collapse"
          data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto pr-4">
            <li class="nav-item active">
              <router-link tag="a" to="/about" class="nav-link text-uppercase text-dark">about us
              </router-link>
            </li>
            <li class="nav-item">
             <a @click="scrollToCommentForm" id="write-comment"> <router-link to="/" class="nav-link text-uppercase text-dark"> write comment</router-link></a>
            </li>
            <li class="nav-item">
              <router-link tag="a" to="/comments" class="nav-link text-uppercase text-dark">comments
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  methods:{
    scrollToCommentForm(){
      if(this.$router.history.current.name == "home")
	    $('html,body').animate({
	        scrollTop: $('.comment').eq(0).offset().top
	    }, 600);
  }
},
}
</script>

<style>
  @import url('~bootstrap/dist/css/bootstrap.min.css');

  @font-face {
    font-family: 'SofiaProMedium';
    src: url('./assets/fonts/SofiaProMedium.ttf') format('truetype')
  }

  .navbar-brand {
    margin-left: 1.4em;
  }

  .navbar-nav {
    font-family: 'SofiaProMedium';
    font-size: 14px;
    padding-right: .7em;
    letter-spacing: .2em;
  }

</style>
