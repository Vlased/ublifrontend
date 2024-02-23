import { StateSchema } from '@/app/providers/StoreProvider'
import { Article, ArticleSortField, ArticleType, ArticleView } from '@/entities/Article'
import { ARTICLE_VIEW_KEY } from '@/shared/constants/localStorage'
import { SortOrder } from '@/shared/types/sorting'
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList'
import { ArticlesPageSchema } from '../types/articlesPageSchema'

const articlesPageAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
})

export const getArticlesPage = articlesPageAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesPageAdapter.getInitialState()
)

const articlesPageSlice = createSlice({
  name: 'articlesSlPageice',
  initialState: articlesPageAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    ids: [],
    entities: {},
    view: ArticleView.GRID,
    page: 1,
    hasMore: true,
    mounted: false,
    sort: ArticleSortField.CREATED_AT,
    search: '',
    order: 'asc',
    type: ArticleType.ALL
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload
      localStorage.setItem(ARTICLE_VIEW_KEY, action.payload)
      state.limit = action.payload === ArticleView.GRID ? 9 : 4
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    initState: (state) => {
      const view = localStorage.getItem(ARTICLE_VIEW_KEY) as ArticleView
      state.view = view
      state.limit = view === ArticleView.GRID ? 9 : 4
      state.mounted = true
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true

        if (action.meta.arg?.replace) {
          articlesPageAdapter.removeAll(state)
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false

        if (action.meta.arg?.replace) {
          articlesPageAdapter.setAll(state, action.payload)
        } else {
          articlesPageAdapter.addMany(state, action.payload)
        }

        state.hasMore = action.payload.length >= (state.limit || 0)
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const {
  reducer: articlesPageReducer,
  actions: articlesPageActions
} = articlesPageSlice
