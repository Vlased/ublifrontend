import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article } from 'entities/Article'
import { getArticlesPageLimit } from '../../selectors/articlesPageSelectors'

interface FetchArticlesListProps {
  page?: number
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (
    { page = 1 },
    {
      extra,
      rejectWithValue,
      getState
    }
  ) => {
    try {
      const limit = getArticlesPageLimit(getState())
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page
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
