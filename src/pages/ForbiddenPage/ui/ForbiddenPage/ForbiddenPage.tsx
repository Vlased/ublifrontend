import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import Page from '@/widgets/ui/Page/Page'

export const ForbiddenPage = memo(() => {
  const { t } = useTranslation()

  return (
    <Page>
      {t('You are not allowed to access this page')}
    </Page>
  )
})
