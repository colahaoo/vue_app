import Vue from 'vue'
import Router from 'vue-router'
import Footer from '@/components/Footer'
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
        default: () => import('@/views/share/index.vue'),
        footer: Footer
      }
    },
    {
      path: '/order',
      name: 'order',
      components: {
        default: () => import('@/views/order/index.vue'),
        footer: Footer
      }
    },
    {
      path: '/find',
      name: 'find',
      components: {
        default: () => import('@/views/find/index.vue'),
        footer: Footer
      }
    },
    {
      path: '/user',
      name: 'user',
      components: {
        default: () => import('@/views/user/index.vue'),
        footer: Footer
      }
    },
    {
      path: '*',
      component: () => import('@/views/notfound/index.vue')
    }
  ]
})

// export default router
