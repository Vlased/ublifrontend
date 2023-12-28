import { BugButton } from 'app/providers/ErrorBoundary'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import Page from 'shared/ui/Page/Page'

const Main = memo(() => {
  const { t } = useTranslation()

  return (
    <Page>
      <BugButton />
      <p>{t('Main Page')}</p>
    </Page>
  )
})

export default Main
