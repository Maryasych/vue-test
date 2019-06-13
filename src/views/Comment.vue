<template>
  <div class="container">
    <a @click="goBack" class="left-arrow mt-2">Back to comments</a>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ this.$route.params.comment.title }}</h5>
        <p class="card-text">{{ this.$route.params.comment.body }}</p>
      </div>
    </div>
  </div>
</template>


<style>
  .left-arrow:before {
    content: "\2190";
  }

  .left-arrow:hover {
    cursor: pointer
  }

</style>
<script>
  export default {
    name: 'Comment',
    goBack() {
      this.$router.go(-1)
    }
  }

</script>
