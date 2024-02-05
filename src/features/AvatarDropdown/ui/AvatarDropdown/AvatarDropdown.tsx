import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Dropdown } from 'shared/ui/Popups'
import { getAuthData, isUserAdmin, isUserManager, userActions } from '../../../../entities/User'

export const AvatarDropdown = memo(() => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const authData = useSelector(getAuthData)
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)
  const isAdminPanelAvailable = isAdmin || isManager

  const handleLogOut = useCallback(() => {
    dispatch(userActions.clearAuthData())
  }, [dispatch])

  if (!authData) {
    return null
  }

  return (
    <Dropdown
      direction='bottom-left'
      trigger={
        <Avatar
          size={30}
          src={authData?.avatar}
          alt="User avatar"
        />
      }
      items={[
        ...(isAdminPanelAvailable
          ? [{
            content: t('Admin Page'),
            href: RoutePath.admin_panel
          }]
          : []),
        {
          content: t('Profile Page'),
          href: RoutePath.profile + authData.id
        },
        {
          content: t('Log Out'),
          onClick: handleLogOut
        }
      ]}
    />
  )
})
