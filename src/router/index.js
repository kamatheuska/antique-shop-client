import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import GreetingLogo from '@/components/GreetingLogo'
import Dashboard from '@/components/Dashboard'
import Navigation from '@/components/Navigation'
import Data from '@/components/Data'

// Previews
import DBPreview from '@/components/previews/DBPreview'

// Form Components
import AddItem from '@/components/forms/AddItem'

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
            logo: GreetingLogo,
            nav: Navigation
          }
        }
      ]
    },
    {
      path: '/data',
      component: Data,
      children: [
        {
          path: 'add',
          components: {
            add: AddItem,
            preview: DBPreview
          }
        }
      ]
    }
  ]
})
