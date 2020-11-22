// import { authenticator } from '@/plugins/firebase'
import { loginRoute } from '@/utils/urls'

const _userIsLoggedIn = () => {
  // return new Promise(resolve => {
  //   authenticator.onAuthStateChanged(user => {
  //     resolve(user)
  //   })
  // })
}

export const checkIfUserIsAuthorized = async (to, from, next) => {
  const user = await _userIsLoggedIn()
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !user) {
    next(loginRoute)
  } else {
    next()
  }
}
