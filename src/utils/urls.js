const _dashboardPagePaths = {
  MAIN: '/dashboard',
  USER: 'users',
  RANKINGS: 'rankings'
}

const _authPaths = {
  MAIN: '/login'
}

export const clientRoutes = {
  LANDING_PAGE_PATH: '/',
  AUTH_PAGE_PATHS: _authPaths,
  DASHBOARD_PAGE_PATHS: _dashboardPagePaths
}

export const loginRoute = `${_authPaths.MAIN}`
export const dashboardUserRoute = `${_dashboardPagePaths.MAIN}/${_dashboardPagePaths.USER}`
export const dashboardRankingRoute = `${_dashboardPagePaths.MAIN}/${_dashboardPagePaths.RANKINGS}`
export const dashboardMainPageRoute = `${_dashboardPagePaths.MAIN}/${_dashboardPagePaths.RANKINGS}`
