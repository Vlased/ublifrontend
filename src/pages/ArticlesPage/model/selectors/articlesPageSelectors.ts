import { StateSchema } from 'app/providers/StoreProvider'
import { ArticleSortField, ArticleType, ArticleView } from '../../../../entities/Article'

export const getArticlesPageLoading = (state: StateSchema) => state.articlesPage?.isLoading
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view ?? ArticleView.GRID
export const getArticlesPageNumber = (state: StateSchema) => state.articlesPage?.page || 1
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 9
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore
export const getArticlesPageMounted = (state: StateSchema) => state.articlesPage?.mounted
export const getArticlesPageOrder = (state: StateSchema) => state.articlesPage?.order ?? 'desc'
export const getArticlesPageSort = (state: StateSchema) => state.articlesPage?.sort ?? ArticleSortField.CREATED_AT
export const getArticlesPageSearch = (state: StateSchema) => state.articlesPage?.search ?? ''
export const getArticlesPageType = (state: StateSchema) => state.articlesPage?.type ?? ArticleType.ALL
