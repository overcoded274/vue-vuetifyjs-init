import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import(/* webpackChunkName: "demo" */ '../views/Demo.vue')
  },
  {
    path: '/readme',
    name: 'readme',
    // route level code-splitting
    // this generates a separate chunk (readme.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "readme" */ '../views/Readme.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
