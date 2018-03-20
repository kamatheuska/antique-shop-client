<template>
  <div class="container sell">
    <router-view name="selectProducts"></router-view>
   <!--  <router-view name="statusBar"></router-view> -->
    <div class="box-gray step"></div>
    <div class="box-gray step"></div>
    <router-link to="/" class="home-link">HOME</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.sell {
  position: absolute;
  background: #444;
  grid-gap: 3rem;
  justify-items: center;
}
.sell .home-link {
  font-weight: 900;
  font-size: 1.2rem;
}
.sell .box-gray {
  grid-column: span 4;
  grid-row: 1 / -1;
  height: 100%;
}
.sell .step {
  opacity: 0.3;
}

</style>
