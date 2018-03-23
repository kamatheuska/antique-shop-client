import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import GreetingLogo from '@/components/GreetingLogo'
import Dashboard from '@/components/Dashboard'
import Navigation from '@/components/Navigation'

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
