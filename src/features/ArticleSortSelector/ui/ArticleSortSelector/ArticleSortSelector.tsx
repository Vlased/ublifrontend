import { ArticleSortField } from '@/entities/Article'
import { FC, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { SortOrder } from '@/shared/types/sorting'
import { ListBox, ListBoxItem } from '@/shared/ui/Popups'
import { HStack } from '@/shared/ui/Stack'

interface ArticleSortSelectorProps {
  sort: ArticleSortField
  order: SortOrder
  handleSortChange: (newSort: ArticleSortField) => void
  handleOrderChange: (newOrder: SortOrder) => void
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = memo(({
  sort,
  order,
  handleSortChange,
  handleOrderChange
}) => {
  const { t } = useTranslation()

  const orderOptions = useMemo<ListBoxItem[]>(() => [
    {
      value: 'asc',
      content: t('ascending order')
    },
    {
      value: 'desc',
      content: t('descending order')
    }
  ], [t])

  const sortFieldOptions = useMemo<ListBoxItem[]>(() => [
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
    <HStack gap="8px">
      <ListBox<ArticleSortField>
        items={sortFieldOptions}
        label="Sort by"
        defaultValue="Sort by"
        value={sort}
        onChange={handleSortChange}
      />
      <ListBox<SortOrder>
        items={orderOptions}
        label="In(order)"
        defaultValue="In(order)"
        value={order}
        onChange={handleOrderChange}
      />
    </HStack>
  )
})
