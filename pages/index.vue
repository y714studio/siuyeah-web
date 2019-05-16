<template>
  <section class="main">
    <div class="building-01">
      <div class="inner"><div v-for="(n,i) in 80" class="window" :class="{'light': (n==17 || n==47)}"></div></div>
    </div>
  </section>
</template>

<script>
  export default {
    mounted() {

    }
  }
</script>

<style lang="scss">
  .main {
    background-color: #0c3545;
    height: 100vh;
    position: relative;
  }

  .building-01 {
    width: 200px;
    height: 420px;
    background-color: #598d98;
    position: absolute;
    top: 60px;
    left: 20px;

    .inner {
      position: relative;
      padding: 10px;

      &:before {
        content: "";
        width: 100%;
        height: 60px;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #566d7b;
      }

      &:after {
        content: "";
        position: absolute;
        top: 60px;
        left: 0;
        width: 0;
        border-style: solid;
        border-width: 200px 200px 0 0;
        border-color: #566d7b transparent transparent transparent;
        z-index: 0;
      }

      .window {
        width: 12px;
        height: 22px;
        background-color: #99aab2;
        float: left;
        position: relative;
        margin: 6px 5px;
        z-index: 2;
        position: relative;

        &:before {
          content: "";
          width: 100%;
          height: 4px;
          bottom: 0;
          position: absolute;
          background-color: #4b616c;
        }

        &.light {
          background-color: #e1ba7f;
        }
      }
    }
  }
</style>
