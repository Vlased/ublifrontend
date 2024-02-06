import { Profile } from '@/pages/ProfilePage'
import { ValidateProfileErrors } from '../const/validateProfileErrors'

export interface EditableProfileCardSchema {
  data?: Profile
  form?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
  validateErrors?: ValidateProfileErrors[]
}
