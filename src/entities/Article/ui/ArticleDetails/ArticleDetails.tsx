import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import CalendarIcon from '@/shared/assets/icons/calendar_icon.svg'
import EyeIcon from '@/shared/assets/icons/eye_icon.svg'
import DynamicModuleLoader, { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Avatar } from '@/shared/ui/Avatar'
import { Icon } from '@/shared/ui/Icon'
import { Skeleton } from '@/shared/ui/Skeleton'
import { Text, TextAlign, TextSize } from '@/shared/ui/Text'
import { ArticleBlockType } from '../../model/const/const'
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsLoading } from '../../model/selectors/getArticleDetails'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { ArticleBlock } from '../../model/types/article'
import ArticleCodeBlockComponent from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import ArticleImageBlockComponent from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import styles from './ArticleDetails.module.scss'

interface ArticleDetailsProps {
  id?: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer
}

export const ArticleDetails: FC<ArticleDetailsProps> = memo(({ id }) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getArticleDetailsLoading)
  const article = useSelector(getArticleDetailsData)
  const error = useSelector(getArticleDetailsError)

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.CODE: {
      return (
        <ArticleCodeBlockComponent
          key={block.id}
          className={styles.block}
          block={block}
        />
      )
    }
    case ArticleBlockType.IMAGE: {
      return (
        <ArticleImageBlockComponent
          key={block.id}
          className={styles.block}
          block={block}
        />
      )
    }
    case ArticleBlockType.TEXT: {
      return (
        <ArticleTextBlockComponent
          key={block.id}
          className={styles.block}
          block={block}
        />
      )
    }
    default: {
      return null
    }
    }
  }, [])

  useInitialEffect(() => {
    if (id !== undefined) {
      dispatch(fetchArticleById(id))
    }
  })

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
  } else {
    content = (
      <div className={styles.container}>
        <div className={styles.avatarContainer}>
          <Avatar
            size={200}
            src={article?.image}
            className={styles.avatar}
          />
        </div>
        <Text
          title={article?.title}
          className={styles.title}
          size={TextSize.L}
        >
          {article?.subtitle}
        </Text>
        <div className={styles.articleInfo}>
          <Icon
            Svg={EyeIcon}
            className={styles.icon}
          />
          <Text>
            {article?.views}
          </Text>
        </div>
        <div className={styles.articleInfo}>
          <Icon
            Svg={CalendarIcon}
            className={styles.icon}
          />
          <Text>
            {article?.createdAt}
          </Text>
        </div>
        {article?.blocks?.map(renderBlock)}
      </div>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      {content}
    </DynamicModuleLoader>
  )
})
