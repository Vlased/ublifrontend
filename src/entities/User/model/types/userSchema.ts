export interface User {
  id: string
  password: string
}

export interface UserSchema {
  authData?: User
}
