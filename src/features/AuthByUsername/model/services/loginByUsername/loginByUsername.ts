import { createAsyncThunk } from '@reduxjs/toolkit'
import { User, userActions } from '@/entities/User'
import { USER_KEY } from '@/shared/constants/localStorage'
import { ThunkConfig } from '@/app/providers/StoreProvider'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, { extra, dispatch, rejectWithValue }) => {
    try {
      const response = await extra.api.post<User>('/login', authData)

      if (!response.data) {
        throw new Error('error')
      }

      localStorage.setItem(USER_KEY, JSON.stringify(response.data))
      dispatch(userActions.setAuthData(response.data))

      // TODO
      // if (extra.navigate) {
      //   extra.navigate('/profile')
      // }

      return response.data
    } catch (e) {
      return rejectWithValue('Incorrect email or password')
    }
  }
)
