import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article'
import { ArticleSortSelector } from '@/features/ArticleSortSelector'
import { ArticleViewSwitch } from '@/features/ArticleViewSwitch'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'
import { SortOrder } from '@/shared/types/sorting'
import { Card } from '@/shared/ui/Card'
import { Input } from '@/shared/ui/Input'
import { TabItem, Tabs } from '@/shared/ui/Tabs'
import { memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { articlesPageActions } from '../../model/slice/articlesPageSlice'
import styles from './ArticlesPageFilters.module.scss'

const ArticlesPageFilters = memo(() => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const view = useSelector(getArticlesPageView)
  const sort = useSelector(getArticlesPageSort)
  const order = useSelector(getArticlesPageOrder)
  const search = useSelector(getArticlesPageSearch)
  const type = useSelector(getArticlesPageType)

  const tabs = useMemo<Array<TabItem<ArticleType>>>(() => (
    Object.values(ArticleType).map((type) => ({
      value: type,
      content: t(type)
    }))
  ), [t])

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }))
  }, [dispatch])

  const debouncedFetch = useDebounce(fetchData, 500)

  const handleViewChange = useCallback((newView: ArticleView) => {
    dispatch(articlesPageActions.setView(newView))
  }, [dispatch])

  const handleSortChange = useCallback((newSort: ArticleSortField) => {
    dispatch(articlesPageActions.setSort(newSort))
    dispatch(articlesPageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  const handleOrderChange = useCallback((newOrder: SortOrder) => {
    dispatch(articlesPageActions.setOrder(newOrder))
    dispatch(articlesPageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  const handleSearchChange = useCallback((value: string) => {
    dispatch(articlesPageActions.setSearch(value))
    dispatch(articlesPageActions.setPage(1))
    debouncedFetch()
  }, [dispatch, debouncedFetch])

  const handleTypeChange = useCallback((tab: TabItem<ArticleType>) => {
    dispatch(articlesPageActions.setType(tab.value))
    dispatch(articlesPageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  return (
    <div>
      <div className={styles.sortWrapper}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          handleSortChange={handleSortChange}
          handleOrderChange={handleOrderChange}
        />
        <ArticleViewSwitch
          view={view}
          handleViewChange={handleViewChange}
        />
      </div>
      <Card className={styles.search}>
        <Input
          placeholder="Search"
          value={search}
          onChange={handleSearchChange}
        />
      </Card>
      <Tabs
        tabs={tabs}
        value={type}
        handleTabClick={handleTypeChange}
      />
    </div>
  )
})

export default ArticlesPageFilters
