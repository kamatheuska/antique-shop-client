<template>
  <nav class="Navigation container__frame grid--12x6 ">
    <ul class="Navigation__list
               grid__row
               grid__col--half"
        v-for="(module, i) in modules"
         :key="module.id">
      <transition name="slide-fade">
      <li class="Navigation__module
                 slide-fade-enter-active"
         @click="showChildren(i)">
           {{ module.name }}
        <transition name="slide-fade">
          <ul v-if="module.selected">
            <li class="Navigation__actions"
                v-for="action in module.actions"
                 :key="action.id">
              <span class="Navigation__link slide-fade-enter-active"
                @click="goToRoute(action)">{{ action.name }}
              </span>
            </li>
          </ul>
        </transition>
      </li>
      </transition>
    </ul>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      modules: [
        {
          id: 1000,
          name: 'MOVIMIENTOS',
          selected: false,
          actions: [
            {
              id: 100,
              name: 'VENDER',
              route: '/movements/sell'
            },
            {
              id: 200,
              name: 'COMPRAR',
              route: '/movements/buy'
            }
          ]
        },
        {
          id: 1001,
          name: 'DATOS',
          selected: false,
          actions: [
            {
              id: 3,
              name: 'AÑADIR ITEM',
              route: '/data/add'
            },
            {
              id: 3,
              name: 'CONSULTAR',
              route: '/data/consult'
            }
          ]
        },
        {
          id: 1002,
          name: 'INICIO',
          selected: false,
          actions: [
            {
              id: 3,
              name: 'INICIO',
              route: '/'
            }
          ]
        }
      ]
    }
  },
  methods: {
    goToRoute ({ route }) {
      this.$router.push(route)
    },
    showChildren (index) {
      this.modules[index].selected = !this.modules[index].selected
      this.modules
        .filter(module => module.id !== index)
        .filter(module => module.selected === true)
        .map(module => module.id)
        .forEach(id => {
          console.log(id)
          this.module[id].selected = !this.module[id].selected
        })
    }
  }
}
</script>

<style>
.Navigation {
  font-family: 'montserratmedium';
  display: grid;
  padding: 3rem 2rem;
  background-image:
    linear-gradient(to right, #F1EFE5, #5F5F5E 76%, #3C3C3B 95%);
  border: none;
  box-shadow: -0.5rem 0.1rem 0.8rem -0.2rem rgba(0,0,0,0.8);
}
.Navigation__list {
  padding-left: 1rem;
  border-left: 2px solid #4f4f4f;
}
.Navigation__module {
  color: #121212;
  font-size: 1.5em;
  list-style-type: none;
}
.Navigation__module:hover {
  color: #C2DCE2;
}
.Navigation__link {
  color: #121212;
  list-style-type: none;
}
.Navigation__link:hover {
  margin-top: 1em;
  color: #C2DCE2;
}
.Navigation__actions {
  margin: 1rem;
  list-style-type: none;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

</style>
