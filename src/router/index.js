import { createRouter, createWebHistory } from 'vue-router'
import TodoHome from '../views/TodoHome.vue'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/signin',
    },
    {
      path: '/my-todo',
      name: 'my-todo',
      component: TodoHome,
      children: [
        {
          path: '/my-todo/today',
          component: () => import('../views/TodayList.vue')
        },
        {
          path: '/my-todo/upcoming',
          component: () => import('../views/UpcomingList.vue')
        },
        {
          path: '/my-todo/life',
          component: () => import('../views/LifeCategory.vue')
        },
        {
          path: '/my-todo/work',
          component: () => import('../views/WorkCategory.vue')
        },
      ]
    },
    {
      path: '/signin',
      name: 'sign-in',
      component: SignIn,
    },
    {
      path: '/signup',
      name: 'sign-up',
      component: SignUp,
    },
    // {
    //   path: '*',
    //   name: 'not-found',
    //   component: NotFound
    // },
  ]
})

export default router
