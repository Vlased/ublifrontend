import { createAsyncThunk } from '@reduxjs/toolkit'
import { getAuthData } from '@/entities/User'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { Comment } from '@/entities/Comment'
import { getArticleDetailsData } from '@/entities/Article'
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId'

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'articleDetails/addCommentForArticle',
  async (text, { extra, dispatch, rejectWithValue, getState }) => {
    try {
      const userData = getAuthData(getState())
      const article = getArticleDetailsData(getState())

      if (!userData || !text || !article) {
        throw new Error('error')
      }

      const response = await extra.api.post<Comment>('/comments', {
        articleId: article.id,
        userId: userData.id,
        text
      })

      if (!response.data) {
        throw new Error('error')
      }

      dispatch(fetchCommentsByArticleId(article.id))

      return response.data
    } catch (e) {
      return rejectWithValue('Incorrect email or password')
    }
  }
)
