import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import Page from 'shared/ui/Page/Page'
import styles from './NotFoundPage.module.scss'

const NotFoundPage = memo(() => {
  const { t } = useTranslation()

  return (
    <Page className={styles.notFoundPage}>
      {t('Page cannot be found')}
    </Page>
  )
})

export default NotFoundPage
