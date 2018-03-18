<template>
  <div class="container-dashboard">
    <div class="dash-logo">
      <img src="../assets/logoGray.png" alt="Logo Matiz">
    </div>
    <div class="welcome user-msg">
      <h1>¡Bienvenid@ <span>{{ user[0] }}</span>! Estás en la app de Matiz. Selecciona una de las opciones para continuar...</h1>
    </div>
    <router-view name="shortcuts"></router-view>
    <router-view name="status"></router-view>
    <router-view name="modules"></router-view>
    <router-view name="news"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: ['ivoneparra', 'jnoddings', 'olanof']
    }
  }
}
</script>

<style scoped>
.container-dashboard {
  padding: 3rem 10rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  height: 100%;
  width: 100%;
  grid-gap: 3rem;
  justify-items: center;
}
.dash-logo {
  position: relative;
  grid-column: 1 / span 5;
  grid-row: 1 / span 4;
}
.dash-logo img {
  position: relative;
  max-height: 100%;
}
.welcome {
  grid-column: 1 / span 5;
  grid-row: 5 / span 2;
  letter-spacing: 0.2rem;
  line-height: 2.8rem;
  align-self: center;
}
.shortcuts {
  grid-column: 1 / span 5;
  grid-row: 7 / -1;
}
.status {
  grid-column: 6 / -1;
  grid-row: 1 / span 1;
}
.modules {
  grid-column: 6 / -1;
  grid-row: 2 / span 7;
}
.news {
  grid-column: 6 / -1;
  grid-row: 9 / -1;
}
</style>
