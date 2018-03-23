import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/refactoring/Welcome'
import GreetingLogo from '@/refactoring/GreetingLogo'
import Dashboard from '@/refactoring/Dashboard'
import Navigation from '@/refactoring/Navigation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Welcome,
      children: [
        {
          path: '',
          components: {
            GreetingLogo: GreetingLogo
          }
        }
      ]
    },
    {
      path: '/dash',
      component: Dashboard,
      children: [
        {
          path: '',
          components: {
            GreetingLogo: GreetingLogo,
            Navigation: Navigation
          }
        }
      ]
    }
  ]
})
