import { memo } from 'react'
import { useTranslation } from 'react-i18next'

const About = memo(() => {
  const { t } = useTranslation()

  return (
    <div>
      <p>{t('About Page')}</p>
    </div>
  )
})

export default About
