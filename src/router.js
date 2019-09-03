import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/register',
      name: 'register',
      components: {
        default: () => import('@/views/register/index.vue')
      }
    },
    {
      path: '/setPassword',
      name: 'setPassword',
      components: {
        default: () => import('@/views/setPassword/index.vue')
      }
    },
    {
      path: '/forget',
      name: 'forget',
      components: {
        default: () => import('@/views/forget/index.vue')
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: () => import('@/views/login/index.vue')
      }
    },
    {
      path: '/share',
      name: 'share',
      components: {
        default: () => import('@/views/share/index.vue')
      }
    },
    {
      path: '/find',
      name: 'find',
      components: {
        default: () => import('@/views/find/index.vue')
      }
    },
    {
      path: '/user',
      name: 'user',
      components: {
        default: () => import('@/views/user/index.vue')
      }
    },
    {
      path: '/order',
      name: 'order',
      components: {
        default: () => import('@/views/order/index.vue')
      }
    }
  ]
})
