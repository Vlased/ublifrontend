import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { Country } from '../../../../../entities/Country'
import { Currency } from '../../../../../entities/Currency'
import { fetchProfileData } from './fetchProfileData'

describe('fetchProfileData', () => {
  test('successful fetch', async () => {
    const data = {
      firstName: 'firstName',
      lastName: 'lastName',
      age: 12,
      currency: Currency.UAH,
      country: Country.Ukraine,
      city: 'city',
      username: 'username',
      avatar: 'https://www.w3schools.com/w3css/img_avatar3.png'
    }

    const thunk = new TestAsyncThunk(fetchProfileData)

    thunk.api.get.mockReturnValue(Promise.resolve({
      data
    }))
    const result = await thunk.callThunk()

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('fetch with error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)

    thunk.api.get.mockReturnValue(Promise.resolve({
      status: 403
    }))
    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
  })
})
