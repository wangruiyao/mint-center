import Vue from 'vue'
import VueRouter from 'vue-router'
import { BlankLayout } from 'components/layouts'
const home = r => require.ensure([], () => r(require('../pages/broadband-home')), 'home')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: BlankLayout,
    children: [
      { path: '', redirect: '/queryBroadband' },
      {
        path: '/queryBroadband',
        component: home
      }
    ]
  }
]

export default new VueRouter({
  routes: routes
})
