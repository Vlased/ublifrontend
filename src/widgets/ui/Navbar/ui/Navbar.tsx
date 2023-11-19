import { getAuthData, userActions } from '../../../../entities/User'
import { LoginModal } from 'features/AuthByUsername'
import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import styles from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar: React.FC<NavbarProps> = memo(({ className }) => {
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
      <div className={classNames([styles.navbar, className])}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={handleLogOut}
        >
          {t('Log Out')}
        </Button>
      </div>
    )
  }

  return (
    <div className={classNames([styles.navbar, className])}>
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
    </div>
  )
})
