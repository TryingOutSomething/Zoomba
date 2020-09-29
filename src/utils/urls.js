const _dashboardPagePaths = {
  MAIN: '/dashboard',
  USER: 'users',
  RANKINGS: 'rankings'
}

export const clientRoutes = {
  LANDING_PAGE_PATH: '/',
  AUTH_PAGE_PATHS: {
    MAIN: '/login'
  },
  DASHBOARD_PAGE_PATHS: _dashboardPagePaths
}

export const dashboardUserRoute = `${_dashboardPagePaths.MAIN}/${_dashboardPagePaths.USER}`
export const dashboardRankingRoute = `${_dashboardPagePaths.MAIN}/${_dashboardPagePaths.RANKINGS}`
export const dashboardMainPageRoute = `${_dashboardPagePaths.MAIN}/${_dashboardPagePaths.RANKINGS}`
