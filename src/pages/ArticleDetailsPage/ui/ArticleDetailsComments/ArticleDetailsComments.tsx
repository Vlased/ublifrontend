import { AddCommentForm } from '@/features/AddCommentForm'
import { FC, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Text, TextSize } from '@/shared/ui/Text/Text'
import { CommentList } from '@/entities/Comment'
import { getArticleCommentsLoading } from '../../model/selectors/comments'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice'
import styles from './ArticleDetailsComments.module.scss'

interface ArticleDetailsCommentsProps {
  id?: string
}

const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = ({ id }) => {
  const dispatch = useAppDispatch()
  const comments = useSelector(getArticleComments.selectAll)
  const areCommentsLoading = useSelector(getArticleCommentsLoading)

  const handleCommentSend = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  })

  return (
    <>
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
    </>
  )
}

export default ArticleDetailsComments
