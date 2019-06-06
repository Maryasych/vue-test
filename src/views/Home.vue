<template>
  <div>
    <div class="container">
      <h1 class="info pt-5 pl-5 pb-5">{{ info }}</h1>
    </div>

    <div class="container-fluid pb-5 pt-3">
      <div class="position-relative" style="height: 480px; z-index: -1">
        <div class="position-absolute main-img" alt=""></div>
      </div>
    </div>

    <div class="container pt5 pb-5">
      <div class="row">
        <div v-for="(item, i) in infoblock" :key="i" class="col-md">
          <img :src="item.img" />
          <h2>{{ item.title }}</h2>
          <ul v-for="(listItem, index) in item.list" :key="index">
            <li>
              {{ listItem }}
            </li>

          </ul>
        </div>
      </div>

    </div>
    <div class="container-fluid comment mt-5">
      <div class="row pt-5">
        <div class="col-md-3 offset-md-2">
          <span class="text-white font-weight-bold display-4">Write comment</span>
          <div class="line mb-5"></div>
        </div>
          <CommentForm></CommentForm>
      </div>
    </div>
    <footer>
      <div class="container-fluid m-auto">
        <div class="row justify-content-between">
          <div class="col-2 m-5">
            <a href="mailto:mail@mail.co" class="text-white">mailto:mail@mail.co</a>
            <br>
            <a href="tel:+02020928172" class="text-white">+02020928172</a></div>
          <div class="col-2 text-muted m-5">Copyright 2019</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import CommentForm from '../components/CommentForm';

export default {
  components: {
    CommentForm,
  },
  data() {
    return {
      info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam soluta reiciendis.',
      infoblock: [{
        img: require('../assets/who-we-are.png'),
        title: 'Who we are?',
        list: [
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate eligendi isteid.',
          `Corrupti pariatur necessitatibus voluptatibus voluptatem distinctio ea vero nulla
            exercitationem, laborum dolor dicta. Culpa quam cum doloremque excepturi.`,
          `Corrupti pariatur necessitatibus voluptatibus voluptatem distinctio ea vero nulla
            exercitationem, laborum dolor dicta. Culpa quam cum doloremque excepturi.`,
        ],
      },
      {
        img: require('../assets/what-we-do.png'),
        title: 'What we do?',
        list: [
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate eligendi isteid.',
          `Corrupti pariatur necessitatibus voluptatibus voluptatem distinctio ea vero nulla
            exercitationem, laborum dolor dicta. Culpa quam cum doloremque excepturi.`,
          `Corrupti pariatur necessitatibus voluptatibus voluptatem distinctio ea vero nulla
            exercitationem, laborum dolor dicta. Culpa quam cum doloremque excepturi.`,
        ],
      },
      {
        img: require('../assets/technology.png'),
        title: 'Technology',
        list: [
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate eligendi isteid.',
          `Corrupti pariatur necessitatibus voluptatibus voluptatem distinctio ea vero nulla
            exercitationem, laborum dolor dicta. Culpa quam cum doloremque excepturi.`,
          `Corrupti pariatur necessitatibus voluptatibus voluptatem distinctio ea vero nulla
            exercitationem, laborum dolor dicta. Culpa quam cum doloremque excepturi.`,
        ],
      },
      ],
    };
  },
};
</script>


<style>
  @font-face {
    font-family: 'SofiaProSemiBold';
    src: url('../assets/fonts/SofiaProSemiBold.ttf') format('truetype')
  }
  .info {
    font-family: 'SofiaProSemiBold';
    font-size: 8vw;
    font-weight: 300;
    line-height: 1.1em;
  }

  .main-img {
    background-image: url('../assets/main-img.jpg');
    background-position: 0 -295px;
    background-repeat: no-repeat;
    background-size: auto;
    height: 100%;
    width: 100%;
  }

  .line {
    width: 80px;
    border: 2px solid yellow
  }

  .comment,
  footer {
    background-color: #090a19
  }

  ::placeholder,
  input[type=text],
  textarea {
    color: green
  }

  input[type=submit] {
    padding: 15px 35px;
  }

</style>
