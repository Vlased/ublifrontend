import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'

const About = memo(() => {
  const { t } = useTranslation()

  return (
    <Page data-testid="AboutPage">
      <p>{t('About Page')}</p>
    </Page>
  )
})

export default About
