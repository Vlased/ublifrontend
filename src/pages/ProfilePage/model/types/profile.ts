import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

export enum ValidateProfileErrors {
  SERVER_ERROR = 'SERVER_ERROR',
  NO_PROFILE_DATA = 'NO_PROFILE_DATA',
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_USER_AGE = 'INCORRECT_USER_AGE',
  INCORRECT_USER_COUNTRY = 'INCORRECT_USER_COUNTRY',
}

export interface Profile {
  firstName?: string
  lastName?: string
  age?: number
  currency?: Currency
  country?: Country
  city?: string
  username?: string
  avatar?: string
}

export interface ProfileSchema {
  data?: Profile
  form?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
  validateErrors?: ValidateProfileErrors[]
}
