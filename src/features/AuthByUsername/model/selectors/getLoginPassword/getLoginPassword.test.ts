import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginPassword } from './getLoginPassword'

describe('getLoginPassword', () => {
  test('should return password', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: '',
        password: 'pass',
        isLoading: false
      }
    }
    expect(getLoginPassword(state as StateSchema)).toEqual('pass')
  })
  test('with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginPassword(state as StateSchema)).toEqual('')
  })
})
