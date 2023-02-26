import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/studentLogin',
    name: 'StudentLogin',
    component: () => import('../views/studentLogin/index.vue')
  },
  {
    path: '/loginRecord',
    name: 'LoginRecord',
    component: () => import('../views/loginRecord/index.vue')
  },
  {
    path: '/administratorLogin',
    name: 'AdminstratorLogin',
    component: () => import('../views/administratorLogin/index.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register/index.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/index.vue'),
  },
  {
    path: '/administratorsMenu',
    name: 'AdministratorsMenu',
    component: () => import('../views/administratorsMenu/index.vue'),
  },
  {
    path: '/forbidEnter',
    name: 'ForbidEnter',
    component: () => import('../views/forbidEnter/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
