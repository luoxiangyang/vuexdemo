import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/hot'
  },
  {
    path: '/hot',
    component: () => import('@/views/hot')
  },
  {
    path: '/movies',
    component: () => import('@/views/movies')
  },
  {
    path: '/top',
    component: () => import('@/views/top')
  },
  {
    path: '/detail/:id?',
    component: () => import('@/views/detail')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" '../views/About.vue')*/
  // }
]

const router = new VueRouter({
  routes
})

export default router
