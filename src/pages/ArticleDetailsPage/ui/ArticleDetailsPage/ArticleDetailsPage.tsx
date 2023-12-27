import { ArticleDetails } from '../../../../entities/Article'
import { memo, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { CommentList } from '../../../../entities/Comment'
import styles from './ArticleDetailsPage.module.scss'
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slice/articleDetailsCommentsSlice'
import { useSelector } from 'react-redux'
import { getArticleCommentsLoading } from '../../model/selectors/comments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from 'features/AddCommentForm'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { Button } from 'shared/ui/Button/Button'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetailsPage = () => {
  const { t } = useTranslation()
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const comments = useSelector(getArticleComments.selectAll)
  const areCommentsLoading = useSelector(getArticleCommentsLoading)

  const handleCommentSend = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])

  const handleBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  })

  if (!id && PROJECT !== 'storybook') {
    return (
      <div>
        {t('Article cannot be found')}
      </div>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Button onClick={handleBackToList}>
        {t('Back to list')}
      </Button>
      <ArticleDetails id={id} />
      <Text
        title="Comments"
        className={styles.commentTitle}
      />
      <AddCommentForm
        handleCommentSend={handleCommentSend}
      />
      <CommentList
        isLoading={areCommentsLoading}
        comments={comments}
      />
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
