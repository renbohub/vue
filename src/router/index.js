import { createRouter, createWebHashHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'
import DefaultLayoutStandAlone from '@/standalone/layouts/DefaultLayoutStandAlone'

const isStandalone = process.env.VUE_APP_STANDALONE_SINGLE_SPA

console.log('Router Configuration:', {
  isStandalone,
  baseURL: process.env.BASE_URL,
})

const routes = [
  {
    path: '/app/dashboard',
    name: 'PageDashboard',
    component: DefaultLayoutStandAlone,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
      },
    ],
  },
  {
    path: '/app/report',
    name: 'PageReport',
    component: DefaultLayoutStandAlone,
    children: [
      {
        path: '',
        name: 'Report',
        component: () => import('@/views/Report.vue'),
      },
    ],
  },
  {
    path: '/404',
    name: 'Page404',
    component: () => import('@/views/pages/Page404'),
  },
  {
    path: '/500',
    name: 'Page500',
    component: () => import('@/views/pages/Page500'),
  },
  {
    path: '/login',
    name: 'PageLogin',
    component: () => import('@/views/pages/Login'),
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

// Middleware to check for token and redirect to login if not found
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (!token && to.path !== '/login') {
    return next('/login')
  }
  next()
})

export default router
