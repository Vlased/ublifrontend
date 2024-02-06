import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { USER_KEY } from '@/shared/constants/localStorage'

export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(USER_KEY) || ''
      if (token) {
        headers.set('Authorization', token)
      }
      return headers
    }
  }),
  endpoints: (builder) => ({})
})
