import { RouteProps } from 'react-router-dom'
import { UserRoles } from '../constants/userRoles'

export type AppRouteProps = RouteProps & {
  authOnly?: true
  roles?: UserRoles[]
}
