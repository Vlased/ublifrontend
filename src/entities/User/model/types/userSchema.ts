import { UserRoles } from '../const/userRoles'

export interface User {
  id: string
  password?: string
  username: string
  avatar?: string
  roles?: UserRoles[]
}

export interface UserSchema {
  authData?: User
  mounted?: boolean
}
