import { createRouter, createWebHistory } from 'vue-router'
import { HomePage } from '@/pages'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Form',
      component: HomePage
    },
    {
      path: '/preview',
      name: 'Preview',
      component: () => import('@/pages').then((data) => data.PreviewPage)
    }
  ]
})

export default router
