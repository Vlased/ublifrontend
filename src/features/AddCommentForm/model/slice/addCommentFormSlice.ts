import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AddCommentFormSchema } from '../types/addCommentForm'

export const initialState: AddCommentFormSchema = {}

const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    }
  },
  extraReducers: (builder) => {}
})

export const {
  actions: addCommentFormActions,
  reducer: addCommentFormReducer
} = addCommentFormSlice
