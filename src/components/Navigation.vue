<template>
  <nav class="Navigation container__frame grid">
    <h1 class="Navigation__title">
      <slot></slot>
    </h1>
    <ul class="Navigation__list
               grid__row
               grid__col--half"
        v-for="(parent, index) in navmenu"
         :key="`parent-${index}`">
      <transition name="slide-fade">
      <li class="Navigation__module
                 slide-fade-enter-active"
         @click="showMenu({ name: 'navmenu', parent })">
           {{ parent.name }}
        <transition name="slide-fade">
          <ul v-if="navmenu[index].sel">
            <li class="Navigation__actions"
                v-for="(child, i) in navmenu[index].children"
                 :key="`child-${i}`">
              <span class="Navigation__link slide-fade-enter-active"
                   @click="goToRoute(navmenu[index].routes[i])">
                   {{ child }}
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
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'NavBar',
  data () {
    return {
    }
  },
  computed: {
    ...mapState([ 'navmenu' ])
  },
  methods: {
    ...mapActions([ 'toggleParentChild' ]),
    showMenu (payload) {
      if (payload.parent.name == 'INICIO') {
        this.goToRoute('/')
      }

      this.toggleParentChild(payload)
    },
    goToRoute (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style>
.Navigation {
  font-family: 'montserratmedium', Arial, sans-serif;
  padding: 2rem 2rem;
  background-color: none;
  border: none;
}
.Navigation__title {
  font-size: 2.5rem;
}
.Navigation__list {
  padding-left: 1rem;
  border-left: 2px solid #6D6D6D;
}
.Navigation__module {
  font-size: 1.5em;
  list-style-type: none;
}
.Navigation__module:hover {
  color: #C2DCE2;
}
.Navigation__link {
  color: #6D6D6D;
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
