<template>
  <div class="GreetingLogo">
    <div class="GreetingLogo__container">
      <img class="GreetingLogo__img"
           src="../assets/logo.png"
           alt="Logo Matiz">
    </div>
    <div class="container--small">
      <h1 class="GreetingLogo__h1">
      Aplicación para la tienda Matiz
      </h1>
    </div>
    <div>
      <slot name="greeting"></slot>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      user: state => state.credentials.user
    })
  },
  methods: {
    ...mapMutations({

    })
  }
}
</script>

<style scoped>
.GreetingLogo__img {
  max-width: 100%;
}
.GreetingLogo__h1 {
  color: #6C6C6C;
  /*color:blue;*/
}
</style>
