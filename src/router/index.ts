import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/plataform/:id',
      name: 'plataform',
      component: () => import('../views/InfoPlataformView.vue')
    },
    {
      path: '/infoPost/:id',
      name: 'infoPost',
      component: () => import('../views/InfoPostView.vue')
    },
  ],
})

export default router
