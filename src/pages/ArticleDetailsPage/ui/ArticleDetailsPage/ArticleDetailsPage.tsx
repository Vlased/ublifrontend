import { ArticleDetails } from '../../../../entities/Article'
import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const ArticleDetailsPage = () => {
  const { t } = useTranslation()
  const { id } = useParams()

  if (!id && PROJECT !== 'storybook') {
    return (
      <div>
        {t('Article cannot be found')}
      </div>
    )
  }

  return (
    <div>
      <ArticleDetails
        id={id}
      />
    </div>
  )
}

export default memo(ArticleDetailsPage)
