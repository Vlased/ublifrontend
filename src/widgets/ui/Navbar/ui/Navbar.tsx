import { LoginModal } from 'features/AuthByUsername'
import { FC, memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { getAuthData, userActions } from '../../../../entities/User'
import styles from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = memo(({ className }) => {
  const { t } = useTranslation()
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false)
  const dispatch = useDispatch()
  const authData = useSelector(getAuthData)

  const handleModalOpen = useCallback(() => {
    setIsAuthModalOpen(true)
  }, [])

  const handleAuthModalClose = useCallback(() => {
    setIsAuthModalOpen(false)
  }, [])

  const handleLogOut = useCallback(() => {
    dispatch(userActions.clearAuthData())
  }, [dispatch])

  if (authData) {
    return (
      <header className={classNames([styles.navbar, className])}>
        <div className={styles.contentContainer}>
          <Text
            title="My App"
            className={styles.appName}
            theme={TextTheme.INVERTED}
          />
          <AppLink
            to={RoutePath.article_create}
            theme={AppLinkTheme.INVERTED}
          >
            {t('Create New Article')}
          </AppLink>
        </div>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={handleLogOut}
        >
          {t('Log Out')}
        </Button>
      </header>
    )
  }

  return (
    <header className={classNames([styles.navbar, className])}>
      <Text
        title="My App"
        className={styles.appName}
      />
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={handleModalOpen}
      >
        {t('Enter')}
      </Button>
      {isAuthModalOpen && <LoginModal
        isOpen={isAuthModalOpen}
        onClose={handleAuthModalClose}
      />}
    </header>
  )
})
