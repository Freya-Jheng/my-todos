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
      redirect: '/my-todo/signin',
    },
    {
      path: '/my-todo',
      name: 'my-todo',
      component: TodoHome,
      children: [
        {
          path: '/today',
          component: () => import('../views/TodayList.vue')
        },
        {
          path: '/upcoming',
          component: () => import('../views/UpcomingList.vue')
        },
        {
          path: '/life',
          component: () => import('../views/LifeCategory.vue')
        },
        {
          path: '/work',
          component: () => import('../views/WorkCategory.vue')
        },
      ]
    },
    {
      path: '/my-todo/signin',
      name: 'sign-in',
      component: SignIn,
    },
    {
      path: '/my-todo/signup',
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
