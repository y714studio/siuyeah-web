<template>
  <section class="container">
    <div>
      <h1>
        siuyeah-web
      </h1>
    </div>
  </section>
</template>

<script>
  export default {
    mounted() {
      let data = {}
      this.$axios.get('/api/isopenning', data)
      .then((response)=> {
        alert("Current time: "+response.data.currentTime+'\nIs website open? '+ response.data.status)
        console.log(response)
      }).catch((err)=>{})
    }
  }
</script>

<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
