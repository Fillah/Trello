import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/pages/dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashborad',
      component: Dashboard
    }
  ]
})
