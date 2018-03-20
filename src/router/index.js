import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/dashboard'
import Shortcuts from '@/components/shortcuts'
import StatusBar from '@/components/statusbar'
import Modules from '@/components/modules'
import News from '@/components/news'
import Sell from '@/components/sell'
import SelectProducts from '@/components/selectProducts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Dashboard,
      children: [
        {
          path: '',
          components: {
            shortcuts: Shortcuts,
            status: StatusBar,
            modules: Modules,
            news: News
          }
        }
      ]
    },
    {
      path: '/products/sell',
      component: Sell,
      children: [
        {
          path: '',
          components: {
            selectProducts: SelectProducts,
            status: StatusBar
          }
        }
      ]
    }
  ]
})
