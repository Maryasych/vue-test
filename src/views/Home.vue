<template>
  <div>
    <div class="container pb-3">
      <h1 class="info pt-5 pl-5">{{ info }}</h1>
    </div>

    <div class="img-wrap mt-5 mb-5">
      <div class="main-img w-100 h-100"></div>
    </div>

    <div class="container pt-5 pb-5">
      <div class="row">
        <div v-for="(item, i) in infoblock" :key="i" class="col-md">
          <img :src="item.img" />
          <h2>{{ item.title }}</h2>
          <ul v-for="(listItem, index) in item.list" :key="index" class="infoblock">
            <li class="infoblock-item">
              {{ listItem }}
            </li>

          </ul>
        </div>
      </div>

    </div>

    <div class="container-fluid comment mt-5">
      <div class="row pt-5">
        <div class="col-md-3 offset-md-1 pt-5 mt-5">
          <span class="text-white comment-text font-weight-bold display-4">Write comment</span>
          <div class="line mb-5"></div>
        </div>
        <CommentForm></CommentForm>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import CommentForm from '../components/CommentForm';
  import Footer from '../components/Footer';

  export default {
    components: {
      CommentForm,
      Footer
    },
    data() {
      return {
        info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam soluta reicie.',
        infoblock: [{
            img: require('../assets/who-we-are.png'),
            title: 'Who we are?',
            list: [
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate eligendi isteid.',
              `Corrupti pariatur necessitatibus voluptatibus`, ` voluptatem distinctio ea vero nulla
            exercitationem, laborum dolor dicta.`, `Culpa quam cum doloremque excepturi.`,
            ],
          },
          {
            img: require('../assets/what-we-do.png'),
            title: 'What we do?',
            list: [
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate eligendi isteid.',
              `Corrupti pariatur necessitatibus voluptatibus`, ` voluptatem distinctio ea vero nulla
            exercitationem, laborum dolor dicta.`, `Culpa quam cum doloremque excepturi.`,
            ],
          },
          {
            img: require('../assets/technology.png'),
            title: 'Technology',
            list: [
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate eligendi isteid.',
              `Corrupti pariatur necessitatibus voluptatibus`, ` voluptatem distinctio ea vero nulla
            exercitationem, laborum dolor dicta.`, `Culpa quam cum doloremque excepturi.`,
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

  @font-face {
    font-family: 'SofiaProRegular';
    src: url('../assets/fonts/SofiaProRegular.ttf') format('truetype')
  }

  .info {
    font-family: 'SofiaProSemiBold';
    font-size: 5em;
    font-weight: 300;
    line-height: .9em;
  }

  .infoblock {
    font-family: 'SofiaProSemiBold';
    font-size: 2.5em;
    font-weight: 700;
  }

  .infoblock-item {
    font-family: 'SofiaProRegular';
    font-size: .4em;
    font-weight: normal;
  }

  .img-wrap {
    height: 35vw;
    max-height: 911px;
    position: relative;
    overflow: hidden;
  }

  .main-img {
    position: absolute;
    background-image: url('../assets/main-img.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto;
  }

  .line {
    width: 80px;
    border: 2px solid yellow
  }

  .comment,
  .dark-footer {
    background-color: #090a19
  }

  .comment-text {
    font-family: "SofiaProSemiBold"
  }

</style>
