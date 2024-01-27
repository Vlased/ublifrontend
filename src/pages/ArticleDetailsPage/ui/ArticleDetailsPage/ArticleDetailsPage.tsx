import { ArticleRecommendationsList } from 'features/ArticleRecommendationsList'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import Page from 'widgets/ui/Page/Page'
import { ArticleDetails } from '../../../../entities/Article'
import { articleDetailsPageReducer } from '../../model/slice'
import ArticleDetailsComments from '../ArticleDetailsComments/ArticleDetailsComments'
import ArticleDetailsPageHeader from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage = () => {
  const { t } = useTranslation()
  const { id } = useParams()

  if (!id && PROJECT !== 'storybook') {
    return (
      <Page>
        {t('Article cannot be found')}
      </Page>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <ArticleRecommendationsList />
        <ArticleDetailsComments id={id} />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
