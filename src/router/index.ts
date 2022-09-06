import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home-view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login-view.vue')
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('../views/game-view.vue')
    }
  ]
})

export default router
