import { useNotifications } from '../../api/notificationApi'
import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './NotificationList.module.scss'
import { VStack } from 'shared/ui/Stack'
import { NotificationItem } from '../NotificationItem/NotificationItem'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

interface NotificationListProps {
  className?: string
}

export const NotificationList: FC<NotificationListProps> = memo(({ className }) => {
  const { data, isLoading } = useNotifications(undefined, {
    pollingInterval: 5000
  })

  if (isLoading) {
    return (
      <VStack
        gap="16px"
        className={classNames([styles.container, className])}
        max
      >
        <Skeleton
          width="100%"
          border="8px"
          height="80px"
        />
        <Skeleton
          width="100%"
          border="8px"
          height="80px"
        />
        <Skeleton
          width="100%"
          border="8px"
          height="80px"
        />
      </VStack>
    )
  }

  return (
    <VStack
      gap="16px"
      className={classNames([styles.container, className])}
      max
    >
      {data?.map((item) => (
        <NotificationItem
          key={item.id}
          item={item}
        />
      ))}
    </VStack>
  )
})
