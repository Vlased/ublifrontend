import { ArticleList, ArticleView } from '../../../../entities/Article'
import { memo, useCallback } from 'react'
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articlesPageActions, articlesPageReducer, getArticlesPage } from '../../model/slice/articlesPageSlice'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { useSelector } from 'react-redux'
import { getArticlesPageLoading, getArticlesPageView } from '../../model/selectors/articlesPageSelectors'
import ArticleViewSwitch from 'features/ArticleViewSwitch/ArticleViewSwitch'
import Page from 'shared/ui/Page/Page'
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage'

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
}

const ArticlesPage = () => {
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticlesPage.selectAll)
  const view = useSelector(getArticlesPageView)
  const isLoading = useSelector(getArticlesPageLoading)

  useInitialEffect(() => {
    dispatch(articlesPageActions.initState())
    dispatch(fetchArticlesList({
      page: 1
    }))
  })

  const handleViewChange = useCallback((newView: ArticleView) => {
    dispatch(articlesPageActions.setView(newView))
  }, [dispatch])

  const handleNextPartLoading = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers}>
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
