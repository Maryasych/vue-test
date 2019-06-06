<template>
  <div class="col-md-6">
    <form id="comment" @submit="validateForm" method="POST" class="d-flex flex-column">
      <input v-model="title" ref="title" type="text"
        class="border border-success mb-3 p-3 bg-transparent rounded">
      <textarea v-model="text" ref="text" cols="50" rows="10" style="resize:none"
        class="border border-success mb-3 p-3 bg-transparent rounded"></textarea>
    </form>
    <a id="comment"></a>
    <input type="submit" @click="validateForm" class="btn btn-success">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
        text: '',
      };
    },
    methods: {
      validateForm(e) {
        if (this.title && this.text) {
          this.sendComment(this.title, this.text);
        }
        if (!this.title) {
          this.$refs.title.focus();
        } else if (!this.text) {
          this.$refs.text.focus();
        }
        e.preventDefault();
      },
      sendComment(title, text) {
        console.log(title, text);
      },

    },
    name: 'CommentForm',
  };

</script>
