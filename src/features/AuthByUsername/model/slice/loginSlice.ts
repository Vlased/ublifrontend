import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { loginByUsername } from '../services/loginByUsername/loginByUsername'
import { LoginSchema } from '../types/loginSchema'

export const initialState: LoginSchema = {
  isLoading: false,
  username: '',
  password: ''
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, { payload }: PayloadAction<string>) => {
      state.username = payload
    },
    setPassword: (state, { payload }: PayloadAction<string>) => {
      state.password = payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(loginByUsername.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const {
  actions: loginActions,
  reducer: loginReducer
} = loginSlice
