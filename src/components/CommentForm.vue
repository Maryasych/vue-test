<template>
  <div class="col-md-5 offset-md-1">
    <form id="comment" class="pt-5 mt-5" @submit="sendComment" action="#">
      <input name="title" type="text"
        class="border border-success mb-3 p-3 bg-transparent rounded w-100 colored"
        placeholder="Title" required>
      <textarea name="body" cols="50" rows="10" style="resize:none"
        class="border border-success mb-3 p-3 bg-transparent rounded w-100 colored"
        placeholder="Your comment" required></textarea>
      <input type="submit" class="btn btn-success px-5 py-3">
    </form>
  </div>
</template>

<style>
  .colored::placeholder {
    color: green
  }

  .colored {
    color: green
  }

</style>


<script>
  export default {
    methods: {
      sendComment(e) {
        let form = document.getElementById('comment');
        let formData = new FormData(form)
        formData.append('created_at', Date.now())
        e.preventDefault();
        var myHeaders = new Headers({
          'Content-Type': 'application/json'
        });

        fetch('https://5cbef81d06a6810014c66193.mockapi.io/api/comments', {
            method: "POST",
            body: JSON.stringify(Object.fromEntries(formData)),
            headers: myHeaders
          })
          .then(response => {
            if (response.ok) {
              alert('Sended')
            } else {
              throw new Error(response.statusText);
            }
          })
          .catch(err => alert(err.message))
      },
    }
  };

</script>
