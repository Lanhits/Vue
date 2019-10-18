import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '@/components/Index'
import Personal from '@/components/Personal'
import Hot from '@/components/Hot'
import Will from '@/components/Will'
import Top from '@/components/Top'
import Det from '@/components/Det'
import Collection from '@/components/Collection'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/index',
          name: 'person',
          meta: {index: 0, name: '首页'},
          component: Personal
        },
        {
          path: '/index/hot',
          name: 'hot',
          meta: {index: 1, name: '正在热映'},
          component: Hot
        },
        {
          path: '/index/top',
          name: 'top',
          meta: {index: 2, name: 'Top50'},
          component: Top
        },
        {
          path: '/index/will',
          name: 'ing',
          meta: {index: 3, name: '即将上映'},
          component: Will
        }
      ]
    },
    {
      path: '/:i',
      name: 'det',
      component: Det
    },
    {
      path: '/index/:which',
      name: 'collect',
      component: Collection
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
