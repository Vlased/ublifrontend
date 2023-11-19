import { LoginSchema } from '../types/loginSchema'
import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice', () => {
  test('test setUsername', () => {
    const state: DeepPartial<LoginSchema> = {
      username: '123'
    }
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setUsername('123123')
    )).toEqual({ username: '123123' })
  })

  test('test setPassword', () => {
    const state: DeepPartial<LoginSchema> = {
      password: 'pass'
    }
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setPassword('passpass')
    )).toEqual({ password: 'passpass' })
  })
})
