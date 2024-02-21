import { getArticleDetailsData } from '@/entities/Article'
import { getRouteArticleEdit, getRouteArticles } from '@/shared/constants/router'
import { Button } from '@/shared/ui/Button'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCanEditArticle } from '../../model/selectors/article'
import styles from './ArticleDetailsPageHeader.module.scss'

const ArticleDetailsPageHeader = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const canEdit = useSelector(getCanEditArticle)
  const article = useSelector(getArticleDetailsData)

  const handleBackToList = useCallback(() => {
    navigate(getRouteArticles())
  }, [navigate])

  const handleEditArticle = useCallback(() => {
    navigate(getRouteArticleEdit(article?.id))
  }, [navigate, article?.id])

  return (
    <div className={styles.container}>
      <Button onClick={handleBackToList}>
        {t('Back to list')}
      </Button>
      {canEdit && (
        <Button onClick={handleEditArticle}>
          {t('Edit')}
        </Button>
      )}
    </div>
  )
}

export default ArticleDetailsPageHeader
