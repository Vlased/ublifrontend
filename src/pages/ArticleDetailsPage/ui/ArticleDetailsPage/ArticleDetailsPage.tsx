import { ArticleDetails } from '../../../../entities/Article'
import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { CommentList } from '../../../../entities/Comment'
import styles from './ArticleDetailsPage.module.scss'
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slice/articleDetailsCommentsSlice'
import { useSelector } from 'react-redux'
import { getArticleCommentsLoading } from 'pages/ArticleDetailsPage/model/selectors/comments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetailsPage = () => {
  const { t } = useTranslation()
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const comments = useSelector(getArticleComments.selectAll)
  const areCommentsLoading = useSelector(getArticleCommentsLoading)

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
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ArticleDetails id={id}/>
      <Text
        title="Comments"
        className={styles.commentTitle}
      />
      <CommentList
        isLoading={areCommentsLoading}
        comments={comments}
      />
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
