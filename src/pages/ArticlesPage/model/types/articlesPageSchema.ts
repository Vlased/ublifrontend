import { Article, ArticleSortField, ArticleType, ArticleView } from '@/entities/Article'
import { SortOrder } from '@/shared/types/sorting'
import { EntityState } from '@reduxjs/toolkit'

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean
  error?: string

  // pagination
  page: number
  limit?: number
  hasMore: boolean

  // filters
  view: ArticleView
  order: SortOrder
  sort: ArticleSortField
  search: string
  type: ArticleType

  mounted?: boolean
}
