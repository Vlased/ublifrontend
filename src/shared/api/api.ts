import axios from 'axios'
import { USER_KEY } from '@/shared/constants/localStorage'

export const $api = axios.create({
  baseURL: API
})

$api.interceptors.request.use(async (config) => {
  if (config.headers) {
    config.headers.Authorization = localStorage.getItem(USER_KEY) || ''
  }

  return config
})
