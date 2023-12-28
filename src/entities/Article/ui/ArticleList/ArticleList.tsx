import { Article, ArticleView } from '../../model/types/article'
import React, { useCallback } from 'react'
import ArticleListItem from '../ArticleListItem/ArticleListItem'
import styles from './ArticleList.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import ArticleListItemSkeleton from '../ArticleListItem/ArticleListItemSkeleton'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
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

const ArticleList: React.FC<ArticleListProps> = ({
  className,
  articles,
  isLoading,
  view = ArticleView.GRID
}) => {
  const renderArticle = useCallback((article: Article) => {
    return (
      <ArticleListItem
        key={article.id}
        article={article}
        view={view}
        className={styles.card}
      />
    )
  }, [view])

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
