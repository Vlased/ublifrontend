import { profileActions, profileReducer } from './profileSlice'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { EditableProfileCardSchema } from '../types/editableProfileCardSchema'
import { Currency } from '@/shared/constants/currency'
import { Country } from '@/shared/constants/country'

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

describe('profileSlice', () => {
  test('test setReadonly', () => {
    const state: DeepPartial<EditableProfileCardSchema> = {
      readonly: false
    }
    expect(profileReducer(
      state as EditableProfileCardSchema,
      profileActions.setReadonly(true)
    )).toEqual({ readonly: true })
  })

  test('test cancelEdit', () => {
    const state: DeepPartial<EditableProfileCardSchema> = { data, form: {} }
    expect(profileReducer(
      state as EditableProfileCardSchema,
      profileActions.cancelEdit()
    )).toEqual({
      readonly: true,
      form: data,
      data
    })
  })

  test('test updateProfile', () => {
    const state: DeepPartial<EditableProfileCardSchema> = {
      form: {
        username: '123'
      }
    }
    expect(profileReducer(
      state as EditableProfileCardSchema,
      profileActions.updateProfile({
        username: '123456'
      })
    )).toEqual({
      form: { username: '123456' }
    })
  })

  test('test update profile service pending', () => {
    const state: DeepPartial<EditableProfileCardSchema> = {
      isLoading: true,
      error: 'some text'
    }

    expect(profileReducer(
      state as EditableProfileCardSchema,
      updateProfileData.pending
    )).toEqual({
      isLoading: true,
      error: undefined
    })
  })
})
