<template>
  <section class="main">
    <div class="building-01">
      <div class="inner">
        <div v-for="(n,i) in 88" class="window" :class="{'light': (n==17 || n==47 || n==62)}"></div>
      </div>
    </div>
    <div class="building-02">
      <div class="inner">
        <div class="ceiling"></div>
        <div class="wall"><div class="inner"><div v-for="(n,i) in 80" class="window" :style="{'left': i*33 + 'px'}"></div></div></div>
      </div>
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
    background-color: #a0e2fd;
    height: 100vh;
    position: relative;
    overflow: hidden;
  }

  .building-01 {
    width: 180px;
    height: 440px;
    background-color: #598d98;
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translate(-240px, 0px);

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
        border-width: 200px 180px 0 0;
        border-color: #566d7b transparent transparent transparent;
        z-index: 0;
      }

      .window {
        width: 10px;
        height: 22px;
        background-color: #99aab2;
        float: left;
        position: relative;
        margin: 6px 5px 2px;
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

  .building-02 {
    width: 100%;
    height: 220px;
    position: absolute;
    top: 420px;
    left: 0;

    .inner {
      position: relative;

      .ceiling {
        position: absolute;
        top: 0;
        width: 100%;
        height: 20px;
        background-color: #ccc;
      }

      .wall {
        position: absolute;
        top: 50px;
        width: 100%;
        height: 50px;
        background-color: #ccc;

        .inner {
          position: relative;

          .window {
            position: absolute;
            top: 0;
            width: 30px;
            height: 15px;
            background-color: #aaa;
          }
        }
      }
    }
  }
</style>
