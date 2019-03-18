// import App from '../App.vue'
import { BlankLayout, BasicLayout } from 'components/layouts'
const center = r => require.ensure([], () => r(require('views/center/center.vue')), 'center')
const user = r => require.ensure([], () => r(require('views/user/index.vue')), 'user')
const login = r => require.ensure([], () => r(require('views/user/login.vue')), 'login')
const register = r => require.ensure([], () => r(require('views/user/register.vue')), 'register')

export default [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '',
        redirect: '/center'
      },
      { // 首页
        path: '/center',
        name: 'center',
        component: center,
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: '/blank',
    component: BlankLayout,
    children: [
      { path: '', redirect: '/user/login' },
      {
        path: '/user',
        component: user,
        children: [
          { // 登录
            path: 'login',
            component: login
          },
          { // 注册
            path: 'register',
            component: register
          }
        ]
      }
    ]
  }
]
// {
//   path: '/',
//     component: App, // 顶层路由，对应index.html
//   children: [ // 二级路由。对应App.vue
//
//   {
//     path: '',
//     redirect: '/center'
//   },
//   { // 首页
//     path: '/center',
//     name: 'center',
//     component: center,
//     meta: { requiresAuth: true }
//   },
//   {
//     path: '/user',
//     component: user,
//     children: [
//       { // 登录
//         path: 'login',
//         component: login
//       },
//       { // 注册
//         path: 'register',
//         component: register
//       }
//     ]
//   }
// ]
// }
