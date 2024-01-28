export enum UserRoles {
  ADMIN = 'ADMIN',
  USER = 'USER',
  MANAGER = 'MANAGER',
}

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
