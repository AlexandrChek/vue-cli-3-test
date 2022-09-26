import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostItemStore from '@/components/PostItemStore.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/:id',
    name: 'post',
    component: () => import('@/components/PostItem.vue')
  },
  {
    path: '/:id/store',
    component: PostItemStore
  }
]

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV),
  routes
})

export default router
