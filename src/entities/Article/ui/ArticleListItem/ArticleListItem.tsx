import { Article, ArticleBlockText, ArticleBlockType, ArticleView } from '../../model/types/article'
import React, { useCallback } from 'react'
import styles from './ArticleListItem.module.scss'
import { Text } from 'shared/ui/Text/Text'
import Icon from 'shared/ui/Icon/Icon'
import EyeIcon from 'shared/assets/icons/eye_icon.svg'
import { Card } from 'shared/ui/Card/Card'
import { classNames } from 'shared/lib/classNames/classNames'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
}

const ArticleListItem: React.FC<ArticleListItemProps> = ({ className, article, view }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleOpenArticle = useCallback(() => {
    navigate(RoutePath.article_details + article.id)
  }, [navigate, article.id])

  const types = (
    <Text className={styles.types}>
      {article.type.join(', ')}
    </Text>
  )

  const views = (
    <>
      <Text className={styles.views}>
        {article.views}
      </Text>
      <Icon
        Svg={EyeIcon}
        className={styles.icon}
      />
    </>
  )

  const image = (
    <img
      src={article.image}
      alt={article.title}
      className={styles.image}
    />
  )

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleBlockText

    return (
      <div className={classNames([styles[view], className])}>
        <Card>
          <div className={styles.header}>
            <Avatar
              size={30}
              src={article.user.avatar}
            />
            <Text className={styles.username}>
              {article.user.username}
            </Text>
            <Text className={styles.date}>
              {article.createdAt}
            </Text>
          </div>
          <Text
            title={article.title}
            className={styles.title}
          />
          {types}
          {image}
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={styles.textBlock}
            />
          )}
          <div className={styles.footer}>
            <Button onClick={handleOpenArticle}>
              {t('Read more...')}
            </Button>
            {views}
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className={classNames([styles[view], className])}>
      <Card onClick={handleOpenArticle}>
        <div className={styles.imageWrapper}>
          {image}
          <Text className={styles.date}>
            {article.createdAt}
          </Text>
        </div>
        <div className={styles.infoWrapper}>
          {types}
          {views}
        </div>
        <Text className={styles.title}>
          {article.title}
        </Text>
      </Card>
    </div>
  )
}

export default ArticleListItem
