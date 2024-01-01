import ArticleViewSwitch from 'features/ArticleViewSwitch/ArticleViewSwitch'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import Page from 'widgets/ui/Page/Page'
import { ArticleList, ArticleView } from '../../../../entities/Article'
import { getArticlesPageLoading, getArticlesPageView } from '../../model/selectors/articlesPageSelectors'
import { articlesPageActions, articlesPageReducer, getArticlesPage } from '../../model/slice/articlesPageSlice'

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
}

const ArticlesPage = () => {
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticlesPage.selectAll)
  const view = useSelector(getArticlesPageView)
  const isLoading = useSelector(getArticlesPageLoading)

  useInitialEffect(() => {
    dispatch(initArticlesPage())
  })

  const handleViewChange = useCallback((newView: ArticleView) => {
    dispatch(articlesPageActions.setView(newView))
  }, [dispatch])

  const handleNextPartLoading = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount={false}
    >
      <Page handleEndScroll={handleNextPartLoading}>
        <ArticleViewSwitch
          view={view}
          handleViewChange={handleViewChange}
        />
        <ArticleList
          articles={articles}
          view={view}
          isLoading={isLoading}
        />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
