<template>
  <div class="Data grid--12x container">
    <router-view name="AddItem"> </router-view>
    <router-view name="DBPreview"> </router-view>
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

<style>
.Data {
  grid-gap: 5rem;
}
</style>