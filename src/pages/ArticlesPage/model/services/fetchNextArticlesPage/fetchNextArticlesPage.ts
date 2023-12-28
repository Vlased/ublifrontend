import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { getArticlesPageHasMore, getArticlesPageLoading, getArticlesPageNumber } from '../../selectors/articlesPageSelectors'
import { articlesPageActions } from '../../slice/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/fetchNextArticlesPage',
  async (_, { dispatch, rejectWithValue, getState }) => {
    try {
      const hasMore = getArticlesPageHasMore(getState())
      const page = getArticlesPageNumber(getState())
      const isLoading = getArticlesPageLoading(getState())

      if (hasMore && !isLoading) {
        dispatch(articlesPageActions.setPage(page + 1))
        dispatch(fetchArticlesList({
          page: page + 1
        }))
      }
    } catch (e) {
      return rejectWithValue('Some weird error happened')
    }
  }
)
