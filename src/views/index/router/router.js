import { BlankLayout, BasicLayout } from 'components/layouts'
const center = r => require.ensure([], () => r(require('../pages/center/center.vue')), 'center')
/*用户操作页面*/
const user = r => require.ensure([], () => r(require('../pages/user/index.vue')), 'user')
const login = r => require.ensure([], () => r(require('../pages/user/login.vue')), 'login')
const register = r => require.ensure([], () => r(require('../pages/user/register.vue')), 'register')

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

// export default [{
//   path: '/',
//   component: App, // 顶层路由
//   children: [
//     {
//       path: '',
//       redirect: '/layout/center'
//     },
//     {
//       path: '/layout',
//       component: BasicLayout,
//       children: [
//         { // 首页
//           path: '/center',
//           name: 'center',
//           component: center,
//           meta: { requiresAuth: true }
//         }
//       ]
//     },
//     {
//       path: '/blank',
//       component: BlankLayout,
//       children: [
//         { path: '', redirect: '/user/login' },
//         {
//           path: '/user',
//           component: user,
//           children: [
//             { // 登录
//               path: 'login',
//               component: login
//             },
//             { // 注册
//               path: 'register',
//               component: register
//             }
//           ]
//         }
//       ]
//     }
//   ]
// }]
