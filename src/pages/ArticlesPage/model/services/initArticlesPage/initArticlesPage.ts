import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { getArticlesPageMounted } from '../../selectors/articlesPageSelectors'
import { articlesPageActions } from '../../slice/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (_, { dispatch, rejectWithValue, getState }) => {
    try {
      const mounted = getArticlesPageMounted(getState())

      if (!mounted) {
        dispatch(articlesPageActions.initState())
        dispatch(fetchArticlesList({
          page: 1
        }))
      }
    } catch (e) {
      return rejectWithValue('Some weird error happened')
    }
  }
)
