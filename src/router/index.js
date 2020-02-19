import Vue from 'vue'
import VueRouter from 'vue-router'
import People from '../views/People.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'People',
    component: People
  },
  {
    path: '/planets',
    name: 'Planets',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "people" */ '../views/Planets.vue')
  },
  {
    path: '/people/:id',
    name: 'Person',
    component: () => import(/* webpackChunkName: "person" */ '../views/Person.vue')
  },
  {
    path: '/planets/:id',
    name: 'Planet',
    component: () => import(/* webpackChunkName: "planet" */ '../views/Planet.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
