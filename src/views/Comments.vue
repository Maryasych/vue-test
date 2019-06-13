<template>
  <div class="container">
    <div class="row">
      <div v-if="alert" class="alert alert-danger m-auto" role="alert">
        <div> {{ error }}</div>
      </div>
      <div v-else class="col-md-6 mt-2" v-for="comment in comments" :key="comment.id">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ comment.title }}</h5>
            <p class="card-text">{{ comment.body }}</p>
            <router-link :to="{ name: 'comment', params: { id: comment.id, comment: comment }}"
              class="btn btn-primary" tag="a">Read more</router-link>
            <footer class="text-muted small"> {{ setDate(comment.created_at) }}</footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .card-title {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .card-text {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

</style>
<script>
  export default {
    name: 'Comments',
    data() {
      return {
        comments: null,
        alert: '',
        error: ''
      }
    },
    methods: {
      setDate(date) {
        return new Date(+date).toLocaleString('en', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
      },
    },
    mounted() {
      fetch('https://5cbef81d06a6810014c66193.mockapi.io/api/comments/')
        .then(function (response) {
          if (response.ok) {
            return response.json();
          }
          throw new Error(response.statusText);
        })
        .then(resp => this.comments = resp)
        .catch(err => {
          this.alert = true;
          this.error = err.message;
        })
    }
  };

</script>
