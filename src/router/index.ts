import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import IndexViewVue from '@/views/IndexView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: IndexViewVue
  },
  {
    path: '/portfolio',
    name: 'trabalhos',
    component: () => import('@/views/WorkView.vue')
  },
  {
    path: '/contactos',
    name: 'contato',
    component: () => import('@/views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
