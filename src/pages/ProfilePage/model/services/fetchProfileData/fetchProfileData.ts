import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Profile } from '../../types/profile'

export const fetchProfileData = createAsyncThunk<Profile, string | undefined, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (profileId, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<Profile>(`/profiles/${profileId}`)

      if (!profileId) {
        return rejectWithValue('Some weird error happened')
      }

      if (!response?.data) {
        throw new Error()
      }

      return response.data
    } catch (e) {
      return rejectWithValue('Some weird error happened')
    }
  }
)
