import Vue from 'vue'
import VueRouter from 'vue-router'
import Route from './router'

import { ACCESS_TOKEN } from '../store/mutation-type'

Vue.use(VueRouter)

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes: Route
})

/*
 *  #全局导航卫视
 *  ## to: Route 即将要进入的目标路由对象
 *  ## from: Route 当前导航正要离开的路由
 *  ## next: Function 一定要调用该方法来resolve这个钩子
 */
router.beforeEach((to, from, next) => {
  if (Vue.ls.get(ACCESS_TOKEN)) { // has token
    next()
  } else { // no token
    if (!to.meta.requiresAuth) {
      next()
    } else {
      next({
        path: '/blank',
        redirect: to.fullPath
      })
    }
  }
})

export default router
