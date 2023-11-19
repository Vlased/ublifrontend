import axios from 'axios'
import { USER_KEY } from 'shared/constants/localStorage'

export const $api = axios.create({
  baseURL: API,
  headers: {
    authorization: localStorage.getItem(USER_KEY)
  }
})
