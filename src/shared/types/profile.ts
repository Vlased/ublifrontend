import { Country } from '../constants/country'
import { Currency } from '../constants/currency'

export interface Profile {
  id?: string
  firstName?: string
  lastName?: string
  age?: number
  currency?: Currency
  country?: Country
  city?: string
  username?: string
  avatar?: string
}
