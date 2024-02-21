import { getAuthData, getUserRoles } from '@/entities/User'
import { getRouteForbiddenPage, getRouteMain } from '@/shared/constants/router'
import { UserRoles } from '@/shared/constants/userRoles'
import { FC, ReactNode, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

interface RequireAuthProps {
  children: ReactNode
  roles?: UserRoles[]
}

const RequireAuth: FC<RequireAuthProps> = ({ children, roles }) => {
  const auth = useSelector(getAuthData)
  const currentUserRoles = useSelector(getUserRoles)
  const location = useLocation()

  const hasRequiredRole = useMemo(() => {
    if (!roles) {
      return true
    }

    return roles.some((requiredRole) => currentUserRoles?.includes(requiredRole))
  }, [currentUserRoles, roles])

  if (!auth) {
    return (
      <Navigate to={getRouteMain()} state={{ from: location }} replace />
    )
  }

  if (!hasRequiredRole) {
    return (
      <Navigate to={getRouteForbiddenPage()} state={{ from: location }} replace />
    )
  }

  return (
    <>
      {children}
    </>
  )
}

export default RequireAuth
