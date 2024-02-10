import { BugButton } from '@/app/providers/ErrorBoundary'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import Page from '@/widgets/ui/Page/Page'
import { Rating } from '@/entities/Rating'

const Main = memo(() => {
  const { t } = useTranslation()

  return (
    <Page>
      <BugButton />
      <p>{t('Main Page')}</p>
      <Rating
        title="Rate this article"
        feedbackTitle="Type your feedback on this article"
        hasFeedback
      />
    </Page>
  )
})

export default Main
