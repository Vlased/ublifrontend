import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './NotFoundPage.module.scss'

const NotFoundPage = memo(() => {
  const { t } = useTranslation()
  return (
    <div className={styles.notFoundPage}>{t('Page cannot be found')}</div>
  )
})

export default NotFoundPage
