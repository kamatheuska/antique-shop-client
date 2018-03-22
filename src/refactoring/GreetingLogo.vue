<template>
  <div class="GreetingLogo">
    <div class="GreetingLogo__img">
      <slot name="logo">
        <img src="../assets/logo.png" alt="Logo Matiz">
      </slot>
    </div>
    <slot name="greeting">
      <div class="container--small">
        <h1 class="GreetingLogo__h1">Aplicación para la tienda Matiz</h1>
      </div> 
    </slot>
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
.GreetingLogo__h1 {
  color: #6C6C6C;
}
</style>