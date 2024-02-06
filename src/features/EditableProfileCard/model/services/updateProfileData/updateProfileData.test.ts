import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { ValidateProfileErrors } from '../../const/validateProfileErrors'
import { updateProfileData } from './updateProfileData'

const data = {
  id: '1',
  firstName: 'firstName',
  lastName: 'lastName',
  age: 12,
  currency: Currency.UAH,
  country: Country.Ukraine,
  city: 'city',
  username: 'username',
  avatar: 'https://www.w3schools.com/w3css/img_avatar3.png'
}

describe('updateProfileData', () => {
  test('successful update', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data
      }
    })

    thunk.api.put.mockReturnValue(Promise.resolve({
      data
    }))
    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('update with error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data
      }
    })

    thunk.api.put.mockReturnValue(Promise.resolve({
      status: 403
    }))
    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([
      ValidateProfileErrors.SERVER_ERROR
    ])
  })

  test('with validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: {
          ...data,
          lastName: ''
        }
      }
    })

    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([
      ValidateProfileErrors.INCORRECT_USER_DATA
    ])
  })
})
