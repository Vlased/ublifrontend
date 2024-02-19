import { ArticleSortSelector, ArticleType, ArticleSortField, ArticleView } from '@/entities/Article'
import { ArticleViewSwitch } from '@/features/ArticleViewSwitch'
import { memo, useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Card } from '@/shared/ui/Card'
import { Input } from '@/shared/ui/Input'
import { getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType, getArticlesPageView } from '../../model/selectors/articlesPageSelectors'
import { articlesPageActions } from '../../model/slice/articlesPageSlice'
import styles from './ArticlesPageFilters.module.scss'
import { SortOrder } from '@/shared/types/sortingTypes'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'
import { TabItem, Tabs } from '@/shared/ui/Tabs'
import { useTranslation } from 'react-i18next'

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
