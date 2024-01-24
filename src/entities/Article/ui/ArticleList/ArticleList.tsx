import { FC, HTMLAttributeAnchorTarget, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { Article, ArticleView } from '../../model/types/article'
import ArticleListItem from '../ArticleListItem/ArticleListItem'
import ArticleListItemSkeleton from '../ArticleListItem/ArticleListItemSkeleton'
import styles from './ArticleList.module.scss'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) => (
  new Array(view === ArticleView.GRID ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton
        key={index}
        view={view}
        className={styles.card}
      />
    ))
)

const ArticleList: FC<ArticleListProps> = ({
  className,
  articles,
  isLoading,
  view = ArticleView.GRID,
  target
}) => {
  const renderArticle = useCallback((article: Article) => {
    return (
      <ArticleListItem
        key={article.id}
        article={article}
        view={view}
        target={target}
      />
    )
  }, [view, target])

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames([styles[view], className])}>
        <Text
          title="No articles found"
          size={TextSize.L}
        />
      </div>
    )
  }

  return (
    <div className={classNames([styles[view], className])}>
      {articles.length
        ? articles.map(renderArticle)
        : null
      }
      {isLoading && (
        <div className={classNames([styles[view], className])}>
          {getSkeletons(view)}
        </div>
      )}
    </div>
  )
}

export default ArticleList
