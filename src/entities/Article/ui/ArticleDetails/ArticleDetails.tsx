import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { memo, useEffect } from 'react'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { useSelector } from 'react-redux'
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsLoading } from '../../model/selectors/getArticleDetails'
import { Text, TextAlign } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import styles from './ArticleDetails.module.scss'

interface ArticleDetailsProps {
  id: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer
}

export const ArticleDetails: React.FC<ArticleDetailsProps> = memo(({ id }) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getArticleDetailsLoading)
  const article = useSelector(getArticleDetailsData)
  const error = useSelector(getArticleDetailsError)

  useEffect(() => {
    dispatch(fetchArticleById(id))
  }, [dispatch, id])

  let content

  if (isLoading) {
    content = (
      <div className={styles.container}>
        <Skeleton
          width={200}
          height={200}
          border="50%"
          className={styles.avatar}
        />
        <Skeleton
          width={300}
          height={32}
          className={styles.title}
        />
        <Skeleton
          width={600}
          height={24}
          className={styles.skeleton}
        />
        <Skeleton
          width="100%"
          height={200}
          className={styles.skeleton}
        />
        <Skeleton
          width="100%"
          height={200}
          className={styles.skeleton}
        />
      </div>
    )
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        title={t('An unknown error happened')}
      />
    )
  } else if (article) {
    content = (
      <div>ArticleDetails</div>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      {content}
    </DynamicModuleLoader>
  )
})
