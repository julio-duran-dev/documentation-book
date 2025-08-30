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
    {
      path: '/Technical/:id',
      name: 'Technical',
      component: () => import('../views/TechnicalArea.vue')
    },
    {
      path: '/biblia',
      redirect: '/biblia/home',
      children: [
        {
          path: 'home',
          name: 'homeBiblie',
          component: () => import('../views/biblia/BiblieView.vue')
        },
        {
          path: 'vida_Eterna',
          name: 'vidaEterna',
          component: () => import('../views/biblia/VidaEternaView.vue')
        },
        {
          path: 'la_oracion',
          name: 'laOracion',
          component: () => import('../views/biblia/laOracion.vue')
        }
      ]
    }
  ],
})

export default router
