import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/classes',
      name: 'classes',
      // route level code-splitting
      // this generates a separate chunk (classes.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ClassesView.vue')
    },
    {
      path: '/races',
      name: 'races',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RacesView.vue')
    },
    {
      path: '/backgrounds',
      name: 'backgrounds',
      // route level code-splitting
      // this generates a separate chunk (backgrounds.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BackgroundsView.vue')
    },
    {
      path: '/spells',
      name: 'spells',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SpellsView.vue')
    }
  ]
})

export default router
