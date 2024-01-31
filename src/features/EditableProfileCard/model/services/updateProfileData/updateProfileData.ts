import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Profile } from 'pages/ProfilePage'
import { ValidateProfileErrors } from '../../const/validateProfileErrors'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { validateProfileData } from '../validateProfileData/validateProfileData'

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileErrors[]>>(
  'profile/updateProfileData',
  async (_, { extra, rejectWithValue, getState }) => {
    try {
      const formData = getProfileForm(getState())

      const errors = validateProfileData(formData)

      if (errors.length) {
        return rejectWithValue(errors)
      }

      const response = await extra.api.put<Profile>(`/profiles/${formData?.id}`, formData)

      if (!response?.data) {
        throw new Error()
      }

      return response.data
    } catch (e) {
      return rejectWithValue([ValidateProfileErrors.SERVER_ERROR])
    }
  }
)
