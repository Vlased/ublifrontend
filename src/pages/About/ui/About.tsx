import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import Page from 'widgets/ui/Page/Page'

const About = memo(() => {
  const { t } = useTranslation()

  return (
    <Page>
      <p>{t('About Page')}</p>
    </Page>
  )
})

export default About
