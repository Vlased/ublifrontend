import { Rating } from '@/entities/Rating'
import { getAuthData } from '@/entities/User'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'
import { FC, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi'

interface ArticleRatingProps {
  className?: string
  articleId?: string
}

const ArticleRating: FC<ArticleRatingProps> = memo(({ className, articleId }) => {
  const userData = useSelector(getAuthData)
  const { data, isLoading } = useGetArticleRating({
    articleId: articleId ?? '',
    userId: userData?.id ?? ''
  })
  const [rateArticle] = useRateArticle()

  const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
    try {
      rateArticle({
        userId: userData?.id ?? '',
        articleId: articleId ?? '',
        rate: starsCount,
        feedback
      })
    } catch (e) {
      // handle error
      console.log('e: ', e)
    }
  }, [rateArticle, userData?.id, articleId])

  const handleAccept = useCallback((starsCount: number, feedback?: string) => {
    handleRateArticle(starsCount, feedback)
  }, [handleRateArticle])

  const handleCancel = useCallback((starsCount: number) => {
    handleRateArticle(starsCount)
  }, [handleRateArticle])

  if (isLoading) {
    return (
      <Skeleton
        width="100%"
        height={120}
      />
    )
  }

  const rating = data?.[0]

  return (
    <Rating
      className={className}
      rate={rating?.rate}
      onAccept={handleAccept}
      onCancel={handleCancel}
      title="Rate this article"
      feedbackTitle="Type your feedback on this article"
      hasFeedback
    />
  )
})

export default ArticleRating
