import { Profile } from 'pages/ProfilePage'
import { ValidateProfileErrors } from '../../const/validateProfileErrors'

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileErrors.NO_PROFILE_DATA]
  }

  const { firstName, lastName, age, country } = profile
  const errors: ValidateProfileErrors[] = []

  if (!firstName || !lastName) {
    errors.push(ValidateProfileErrors.INCORRECT_USER_DATA)
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileErrors.INCORRECT_USER_AGE)
  }

  if (!country) {
    errors.push(ValidateProfileErrors.INCORRECT_USER_COUNTRY)
  }

  return errors
}
