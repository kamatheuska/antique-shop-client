<template>
  <div class="Welcome container grid--12x">
    <div class="grid__row grid__col--half">
      <router-view class="Welcome__GreetingLogo"
                    name="GreetingLogo"></router-view>
    </div>
    <input placeholder="Escribe tu nombre aqui"
                 class="Welcome__input"
                 :value="credentials.email"
                 @input="updateData"
                  type="text">
    <button class="button
                   button--state-submit
                   Welcome__button1
                   grid__row--third"
           @click="loginUser">
                 INICIAR SESION</button>
    <button class="button
                   button--state-alert
                   Welcome__button2
                   grid__row--third">
                 REGISTRAR USUARIO</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  data () {
    return {
      credentials: {
        user: ''
      }
    }
  },
  methods: {
    ...mapMutations({
      update: 'UPDATE'
    }),
    ...mapActions({
      login: 'login'
    }),
    loginUser () {
      this.login().then(() => {
        this.$router.push('dash')
      }).catch(err => err)
    },
    updateData (e) {
      this.update(e.target.value)
    }
  }
}
</script>

<style scoped>
.Welcome__input {
  grid-column: 9 / span 3;
  grid-row: 9;
  background: none;
  border: 2px solid #DBD3B8;
  color: #DBD3B8;
  font-size: 2em;
  width: 28rem;
}
.Welcome__button1 {
  grid-column: 9 / -1;
  grid-row: 10;
}
.Welcome__button2 {
  margin-top: 2rem;
  grid-column: 9 / -1;
  grid-row: 11;
}
</style>
