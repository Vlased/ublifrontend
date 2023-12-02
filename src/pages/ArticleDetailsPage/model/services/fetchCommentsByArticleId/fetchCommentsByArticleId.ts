import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Comment } from 'entities/Comment'

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
  'articleDetails/fetchCommentsByArticleId',
  async (articleId, { extra, rejectWithValue }) => {
    try {
      if (!articleId) {
        return rejectWithValue('Some weird error happened')
      }

      const response = await extra.api.get<Comment[]>('/comments', {
        params: {
          articleId,
          _expand: 'user'
        }
      })

      if (!response?.data) {
        throw new Error()
      }

      return response.data
    } catch (e) {
      return rejectWithValue('Some weird error happened')
    }
  }
)
