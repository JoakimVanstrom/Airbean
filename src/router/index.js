import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Nav from '../views/Nav.vue'
import Coffee from '../views/Coffee.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu',
    name: 'Manu',
    component: Menu
  },
  {
    path: '/nav',
    name: 'Nav',
    component: Nav
  },
  {
    path: '/coffe',
    name: 'Coffee',
    component: Coffee
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
