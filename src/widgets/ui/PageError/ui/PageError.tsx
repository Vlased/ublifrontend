import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import styles from './PageError.module.scss'

export const PageError = () => {
  const { t } = useTranslation()

  const reload = useCallback(() => {
    location.reload()
  }, [])

  return (
    <div className={styles.pageError}>
      <p>{t('An unknown error happened')}</p>
      <Button onClick={reload}>
        {t('Reload page')}
      </Button>
    </div>
  )
}
