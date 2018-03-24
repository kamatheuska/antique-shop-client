<template>
  <div class="Data grid grid--x12 container">
    <nav-bar class="grid__col">DATOS</nav-bar>
    <router-view name="add" class="Data__add"></router-view>
    <router-view name="preview" class="Data__preview"></router-view>
  </div>
</template>

<script>
export default {
  name: 'DataModule',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.Data {
  grid-gap: 3rem;
  padding: 2rem 4rem;
}
.Data__add {
  grid-column: 2 / span 6;
}
.Data__preview {
  grid-column: 8 / -1;
}

</style>