import { Profile } from 'pages/ProfilePage'

export enum ValidateProfileErrors {
  SERVER_ERROR = 'SERVER_ERROR',
  NO_PROFILE_DATA = 'NO_PROFILE_DATA',
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_USER_AGE = 'INCORRECT_USER_AGE',
  INCORRECT_USER_COUNTRY = 'INCORRECT_USER_COUNTRY',
}

export interface EditableProfileCardSchema {
  data?: Profile
  form?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
  validateErrors?: ValidateProfileErrors[]
}
