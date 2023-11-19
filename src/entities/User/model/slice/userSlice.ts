import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { USER_KEY } from 'shared/constants/localStorage'
import { User, UserSchema } from '../../../../entities/User/model/types/userSchema'

const initialState: UserSchema = {}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, { payload }: PayloadAction<User>) => {
      state.authData = payload
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_KEY)
      if (user) {
        state.authData = JSON.parse(user)
      }
    },
    clearAuthData: (state) => {
      state.authData = undefined
      localStorage.removeItem(USER_KEY)
    }
  }
})

export const {
  actions: userActions,
  reducer: userReducer
} = userSlice
