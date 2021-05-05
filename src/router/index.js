import Vue from 'vue'
import VueRouter from 'vue-router'
import paths from './paths'
import { checkIfUserIsAuthorized } from '@/utils/routeGuards'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: paths,

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return {
      x: 0,
      y: 0
    }
  }
})

router.beforeEach(checkIfUserIsAuthorized)

export default router
