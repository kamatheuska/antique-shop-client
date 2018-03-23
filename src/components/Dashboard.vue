<template>
  <div class="Dashboard container grid--12x">    
    <span class="Dashboard__user">{{ user }}</span>
    <router-view class="Dashboard__GreetingLogo"
                  name="GreetingLogo">
    </router-view>

    <router-view class="Dashboard__Navigation"
                  name="Navigation">
    </router-view>

    <div class="Dashboard__container">
      <div v-bind:class="gridLocation(i)"
                  class="Dashboard__module"
                  v-for="(module, i) in modules"
                   :key="module.id">
        <span class="Dashboard__module--name">
          {{ module.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      modules: [
        { id: 'mod1', alias: 'data', name: 'Base de Datos' },
        { id: 'mod2', alias: 'movs', name: 'Movimientos' },
        { id: 'mod3', alias: 'admin', name: 'Admin' },
        { id: 'mod4', alias: 'credits', name: 'Créditos' }
      ]
    }
  },
  computed: {
    ...mapState({
      user: state => state.credentials.user
    })
  },
  methods: {
    gridLocation (index) {
      let alias = this.modules[index].alias
      return {
        'Dashboard__module--data': alias === 'data',
        'Dashboard__module--movs': alias === 'movs',
        'Dashboard__module--admin': alias === 'admin',
        'Dashboard__module--credits': alias === 'credits'
      }
    }
  }
}
</script>

<style >
.Dashboard__GreetingLogo {
  grid-column: 1 / span 6;
  grid-row: 2 / span 5;
}
.Dashboard__user {
  color: #F7A830;
  font-weight: bold;
  font-size: 2rem;
  grid-column: span 3;
}
.Dashboard__Navigation {
  grid-column: 1 / span 3;
  grid-row: 7 / -1;
}
.Dashboard__container {
  display: grid;
  height: 100%;
  width: 100%;
  grid-gap: 4rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto repeat(2, 1fr) auto;
  grid-column: 7 / -1;
  grid-row: 3 / span 5;
  align-items: center;
  justify-items: center;
}
.Dashboard__module {
  line-height: 9rem;
  height: 9rem;
  width: 15rem;
  background: rgba(219, 211, 184, 0.8);
  box-shadow: 0px 0.4rem 0.6rem 0.4rem rgba(0,0,0,0.2);
  transition: background-color 0.8s ease;
}
.Dashboard__module--name {
  font-family: 'montserratmedium', Arial, sans-serif;
  color: #121212;
  font-size: 1.6rem;
  line-height: 2rem;
  text-align: center;
  width: 100%;
  display: inline-block;
}
.Dashboard__module--data {
  grid-column: 2;
  grid-row: 2;
}
.Dashboard__module--movs {
  grid-column: 3;
  grid-row: 2;
}
.Dashboard__module--admin {
  grid-column: 2;
  grid-row: 3;
}
.Dashboard__module--credits {
  grid-column: 3;
  grid-row: 3;
}
.Dashboard__module--data:hover    { background: #C2DCE2 }
.Dashboard__module--movs:hover    { background: #BBF9E8 }
.Dashboard__module--admin:hover   { background: #CB8BEB }
.Dashboard__module--credits:hover { background: #FCDFB3 }
</style>
