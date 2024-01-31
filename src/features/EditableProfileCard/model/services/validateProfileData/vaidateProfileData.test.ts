import { Country } from '../../../../../entities/Country'
import { Currency } from '../../../../../entities/Currency'
import { ValidateProfileErrors } from '../../const/validateProfileErrors'
import { validateProfileData } from './validateProfileData'

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

describe('validateProfileData', () => {
  test('no errors', async () => {
    const result = validateProfileData(data)
    expect(result).toEqual([])
  })

  test('without first and last name', async () => {
    const result = validateProfileData({
      ...data,
      firstName: '',
      lastName: ''
    })
    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_USER_DATA
    ])
  })

  test('with incorrect age', async () => {
    const result = validateProfileData({
      ...data,
      age: undefined
    })
    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_USER_AGE
    ])
  })

  test('without country', async () => {
    const result = validateProfileData({
      ...data,
      country: undefined
    })
    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_USER_COUNTRY
    ])
  })

  test('without everything', async () => {
    const result = validateProfileData({})
    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_USER_DATA,
      ValidateProfileErrors.INCORRECT_USER_AGE,
      ValidateProfileErrors.INCORRECT_USER_COUNTRY
    ])
  })
})
