import { memo } from 'react'
import { VStack } from '@/shared/ui/Stack'
import { Text, TextSize } from '@/shared/ui/Text'
import { ArticleList } from '@/entities/Article'
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi'
import styles from './ArticleRecommendationsList.module.scss'

interface ArticleRecommendationsListProps {
  className?: string
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className } = props
  const { isLoading, data: articleRecommendations } = useArticleRecommendationsList(4)

  return (
    <VStack gap="8px" className={className}>
      <Text
        title="Recommendations"
        size={TextSize.L}
        className={styles.title}
      />
      <ArticleList
        articles={articleRecommendations || []}
        isLoading={isLoading}
        target="_blank"
      />
    </VStack>
  )
})
