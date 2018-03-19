<template>
  <div class="container sell">
    <router-view name="selectProducts"></router-view>
    <div class="box-gray step"></div>
    <div class="box-gray step"></div>
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
.sell .box-gray {
  grid-column: span 4;
  grid-row: 1 / -1;
  height: 100%;
}
.sell .step {
  opacity: 0.3;
}

</style>
