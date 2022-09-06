import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import Home from '@/views/home-view.vue'

export const router = createRouter({
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
      component: () => import('@/views/login-view.vue')
    },
    {
      path: '/loginCallback',
      name: 'loginCallback',
      component: () => import('@/views/login-callback-view.vue')
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('@/views/game-view.vue')
    },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
})

router.beforeEach(async (nextPage) => {
  const publicPages = ['/login', '/loginCallback'];
  const authRequired = !publicPages.includes(nextPage.path);
  const auth = useAuthStore();

  if (authRequired && (!auth.code || !auth.access_token)) {
    return '/login';
  }
})

export default router
