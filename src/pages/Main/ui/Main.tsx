import { BugButton } from 'app/providers/ErrorBoundary'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

const Main = memo(() => {
  const { t } = useTranslation()
  return (
    <div>
      <BugButton />
      <p>{t('Main Page')}</p>
    </div>
  )
})

export default Main
