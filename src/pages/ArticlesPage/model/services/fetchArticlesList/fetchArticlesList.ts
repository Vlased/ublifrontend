import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article, ArticleType } from '../../../../../entities/Article'
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams'
import {
  getArticlesPageLimit,
  getArticlesPageNumber,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType
} from '../../selectors/articlesPageSelectors'

type FetchArticlesListProps = {
  replace?: boolean
} | undefined

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (_, { extra, rejectWithValue, getState }) => {
    try {
      const page = getArticlesPageNumber(getState())
      const limit = getArticlesPageLimit(getState())
      const sort = getArticlesPageSort(getState())
      const order = getArticlesPageOrder(getState())
      const search = getArticlesPageSearch(getState())
      const type = getArticlesPageType(getState())

      addQueryParams({
        sort,
        order,
        search,
        type_like: type
      })

      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          q: search,
          type_like: type === ArticleType.ALL ? undefined : type
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
