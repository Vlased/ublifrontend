import { Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRouteProps, routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/ui/PageLoader'
import RequireAuth from './RequireAuth'

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const elementWrapper = (
      <div className='pageWrapper'>
        {route.element}
      </div>
    )
    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth>{elementWrapper}</RequireAuth> : elementWrapper}
      />
    )
  }, [])
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
    </Suspense>
  )
}

export default AppRouter
