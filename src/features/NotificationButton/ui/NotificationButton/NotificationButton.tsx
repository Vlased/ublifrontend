import { NotificationList } from '../../../../entities/Notification'
import { FC, memo } from 'react'
import NotificationsIcon from 'shared/assets/icons/notifications_icon.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import Icon from 'shared/ui/Icon/Icon'
import { Popover } from 'shared/ui/Popups'
import styles from './NotificationButton.module.scss'

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton: FC<NotificationButtonProps> = memo(({ className }) => {
  return (
    <Popover
      direction='bottom-left'
      trigger={(
        <Button theme={ButtonTheme.CLEAR}>
          <Icon
            Svg={NotificationsIcon}
            className={styles.notificationsIcon}
            inverted
          />
        </Button>
      )}
      className={className}
    >
      <NotificationList className={styles.notifications} />
    </Popover>
  )
})
