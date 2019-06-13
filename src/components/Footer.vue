<template>
  <footer class="dark-footer">
    <div class="container-fluid m-auto">
      <div class="row justify-content-between">
        <div class="col-2 m-5">
          <a :href="'mailto:' + mail" class="text-white">{{ mail }} </a>
          <br>
          <a :href="'tel:' + tel" class="text-white">{{ tel }} </a></div>
        <div class="col-3 text-muted m-5">Copyright {{ new Date().getFullYear()}} All Rights
          Reserved.</div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        mail: "mail@mail.co",
        tel: "+2365346346",
      }
    }
  }

</script>
