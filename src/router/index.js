import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Toread from '../views/Toread.vue'
import Admin from '../views/Admin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/toRead',
    name: 'Toread',
    component: Toread
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
