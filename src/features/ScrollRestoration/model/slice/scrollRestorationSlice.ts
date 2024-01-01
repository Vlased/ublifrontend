import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ScrollRestorationSchema } from '../types/scrollRestorationSchema'

export const initialState: ScrollRestorationSchema = {
  scroll: {}
}

const scrollRestorationSlice = createSlice({
  name: 'scrollRestoration',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string, position: number }>) => {
      state.scroll[payload.path] = payload.position
    }
  }
})

export const {
  actions: scrollRestorationActions,
  reducer: scrollRestorationReducer
} = scrollRestorationSlice
