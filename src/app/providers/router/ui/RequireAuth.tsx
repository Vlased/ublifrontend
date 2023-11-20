import { getAuthData } from '../../../../entities/User'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface RequireAuthProps {
  children: React.ReactNode
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const auth = useSelector(getAuthData)
  const location = useLocation()

  if (!auth) {
    return (
      <Navigate to={RoutePath.main} state={{ from: location }} replace />
    )
  }

  return (
    <>
      {children}
    </>
  )
}

export default RequireAuth
