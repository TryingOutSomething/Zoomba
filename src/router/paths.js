import { clientRoutes } from '@/utils/urls'

const { LANDING_PAGE_PATH, AUTH_PAGE_PATHS, DASHBOARD_PAGE_PATHS } = clientRoutes

export default [
  {
    path: '*',
    meta: {
      name: 'Error',
      requiresAuth: false
    },
    component: () => import(/* webpackChunkName: "error" */ '@/views/ErrorView')
  },
  {
    path: LANDING_PAGE_PATH,
    meta: {
      name: 'Landing Page',
      requiresAuth: false
    },
    component: () => import(/* webpackChunkName: "landing" */ '@/views/LandingPage.vue')
  },
  {
    path: AUTH_PAGE_PATHS.MAIN,
    meta: {
      name: 'Login Page',
      requiresAuth: false
    },
    component: () => import(/* webpackChunkName: "login" */ '@/views/LoginView.vue'),
    children: [
      {
        path: '',
        meta: {
          name: 'Login Form',
          requiresAuth: false
        },
        component: () => import(/* webpackChunkName: "login" */ '@/components/dashboard/auth/LoginForm')
      }
    ]
  },
  {
    path: DASHBOARD_PAGE_PATHS.MAIN,
    meta: {
      name: 'Dashboard Page',
      requiresAuth: false
    },
    component: () => import(/* webpackChunkName: "dashboard" */ '@/views/DashboardView'),
    children: [
      {
        path: DASHBOARD_PAGE_PATHS.USER,
        meta: {
          name: 'Manage Users',
          requiresAuth: false
        },
        component: () => import(/* webpackChunkName: "dashboard" */ '@/components/dashboard/main/BaseManageUsers')
      },
      {
        path: DASHBOARD_PAGE_PATHS.RANKINGS,
        meta: {
          name: 'View Rankings',
          requiresAuth: false
        },
        component: () => import(/* webpackChunkName: "dashboard" */ '@/components/dashboard/main/BaseRankings')
      }
    ]
  }
]
