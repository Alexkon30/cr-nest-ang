import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import { useAuthStore } from '@/stores'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'login',
      component: AuthView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: 'profile',
          name: 'profile',
          // route level code-splitting
          // this generates a separate chunk (Name.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/ProfileView.vue')
        },
        {
          path: 'shedule',
          name: 'shedule',
          component: () => import('../views/SheduleView.vue')
        },
        {
          path: 'stats',
          name: 'stats',
          component: () => import('../views/StatsView.vue')
        },
        {
          path: 'info',
          name: 'info',
          component: () => import('../views/InfoView.vue')
        },
        {
          path: 'lesson/:id(\\d+)',
          name: 'lesson',
          component: () => import('../views/LessonView.vue')
        },
        {
          path: 'results/:id(\\d+)',
          name: 'results',
          component: () => import('../views/ResultsView.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/PageNotFoundView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const { user } = useAuthStore()
  
  if (to.name !== 'login' && !user) next({ name: 'login' })
  else next()
})

