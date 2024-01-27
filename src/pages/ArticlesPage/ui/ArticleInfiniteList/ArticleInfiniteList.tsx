import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { ArticleList } from '../../../../entities/Article'
import { getArticlesPageLoading, getArticlesPageView } from '../../model/selectors/articlesPageSelectors'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { getArticlesPage } from '../../model/slice/articlesPageSlice'
import styles from './ArticleInfiniteList.module.scss'

const ArticleInfiniteList = () => {
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticlesPage.selectAll)
  const view = useSelector(getArticlesPageView)
  const isLoading = useSelector(getArticlesPageLoading)
  const [searchParams] = useSearchParams()

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams))
  })

  return (
    <ArticleList
      articles={articles}
      view={view}
      isLoading={isLoading}
      className={styles.list}
    />
  )
}

export default ArticleInfiniteList
