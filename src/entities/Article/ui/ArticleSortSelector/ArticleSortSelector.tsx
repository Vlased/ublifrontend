import { FC, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { SortOrder } from 'shared/types/sortingTypes'
import { Select, SelectOptionType } from 'shared/ui/Select/Select'
import { ArticleSortField } from '../../model/types/article'
import styles from './ArticleSortSelector.module.scss'

interface ArticleSortSelectorProps {
  sort: ArticleSortField
  order: SortOrder
  handleSortChange: (newSort: ArticleSortField) => void
  handleOrderChange: (newOrder: SortOrder) => void
}

const ArticleSortSelector: FC<ArticleSortSelectorProps> = memo(({
  sort,
  order,
  handleSortChange,
  handleOrderChange
}) => {
  const { t } = useTranslation()

  const orderOptions = useMemo<Array<SelectOptionType<SortOrder>>>(() => [
    {
      value: 'asc',
      content: t('ascending order')
    },
    {
      value: 'desc',
      content: t('descending order')
    }
  ], [t])

  const sortFieldOptions = useMemo<Array<SelectOptionType<ArticleSortField>>>(() => [
    {
      value: ArticleSortField.CREATED_AT,
      content: t('(by)creation date')
    },
    {
      value: ArticleSortField.TITLE,
      content: t('(by)title')
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('(by)views')
    }
  ], [t])

  return (
    <div className={styles.container}>
      <Select
        options={sortFieldOptions}
        label="Sort by"
        value={sort}
        onChange={handleSortChange}
      />
      <Select
        options={orderOptions}
        label="In(order)"
        value={order}
        onChange={handleOrderChange}
      />
    </div>
  )
})

export default ArticleSortSelector
