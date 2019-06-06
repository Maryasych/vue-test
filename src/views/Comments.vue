<template>
    <div class="container-fluid">
        <div class="row"></div>
    </div>
</template>
<script>
export default {
    data:{
        comments:''
    },

    mounted() {
    fetch('https://5cbef81d06a6810014c66193.mockapi.io/api/comments/')
    .then(resp => resp.json())
    .then(resp=>{console.log(resp)})
    //.then(resp=> this.comments = resp)
    }
}
</script>
