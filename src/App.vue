<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg static-top mt-4">
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
              <router-link to="/about" class="nav-link text-uppercase text-dark">about us
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/#comment" class="nav-link text-uppercase text-dark">write comment
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/comments" class="nav-link text-uppercase text-dark">comments
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

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
