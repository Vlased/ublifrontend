import { StateSchema } from 'app/providers/StoreProvider'
import { ValidateProfileErrors } from '../../types/editableProfileCardSchema'
import { getProfileValidateErrors } from './getProfileValidateErrors'

describe('getProfileValidateErrors', () => {
  test('should return validate errors', () => {
    const validateErrors = [
      ValidateProfileErrors.INCORRECT_USER_DATA,
      ValidateProfileErrors.INCORRECT_USER_AGE,
      ValidateProfileErrors.INCORRECT_USER_COUNTRY
    ]
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors
      }
    }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateErrors)
  })
  test('with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
  })
})
