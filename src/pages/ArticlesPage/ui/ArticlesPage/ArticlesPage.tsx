import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { memo, useCallback } from 'react'
import DynamicModuleLoader, { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import Page from '@/widgets/ui/Page/Page'
import { articlesPageReducer } from '../../model/slice/articlesPageSlice'
import ArticleInfiniteList from '../ArticleInfiniteList/ArticleInfiniteList'
import ArticlesPageFilters from '../ArticlesPageFilters/ArticlesPageFilters'
import styles from './ArticlesPage.module.scss'

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
}

const ArticlesPage = () => {
  const dispatch = useAppDispatch()

  const handleNextPartLoading = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount={false}
    >
      <Page
        handleEndScroll={handleNextPartLoading}
        className={styles.container}
      >
        <ArticlesPageFilters />
        <ArticleInfiniteList />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
