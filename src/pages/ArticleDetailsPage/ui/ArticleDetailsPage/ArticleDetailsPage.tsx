import { AddCommentForm } from 'features/AddCommentForm'
import { getArticleRecommendationsLoading } from '../../model/selectors/recommendations'
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations'
import { articleDetailsPageReducer } from '../../model/slice'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Text, TextSize } from 'shared/ui/Text/Text'
import Page from 'widgets/ui/Page/Page'
import { ArticleDetails, ArticleList } from '../../../../entities/Article'
import { CommentList } from '../../../../entities/Comment'
import { getArticleCommentsLoading } from '../../model/selectors/comments'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice'
import { getArticleRecommendations } from '../../model/slice/articleDetailsRecommendationsSlice'
import ArticleDetailsPageHeader from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import styles from './ArticleDetailsPage.module.scss'

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage = () => {
  const { t } = useTranslation()
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const comments = useSelector(getArticleComments.selectAll)
  const recommendations = useSelector(getArticleRecommendations.selectAll)
  const areCommentsLoading = useSelector(getArticleCommentsLoading)
  const areRecommendationsLoading = useSelector(getArticleRecommendationsLoading)

  const handleCommentSend = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
    dispatch(fetchArticleRecommendations())
  })

  if (!id && PROJECT !== 'storybook') {
    return (
      <Page>
        {t('Article cannot be found')}
      </Page>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <Text
          title="Recommendations"
          size={TextSize.L}
          className={styles.title}
        />
        <ArticleList
          articles={recommendations}
          isLoading={areRecommendationsLoading}
          className={styles.recommendations}
          target="_blank"
        />
        <Text
          title="Comments"
          size={TextSize.L}
          className={styles.title}
        />
        <AddCommentForm
          handleCommentSend={handleCommentSend}
        />
        <CommentList
          isLoading={areCommentsLoading}
          comments={comments}
        />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
