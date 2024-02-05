import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Card, CardTheme } from 'shared/ui/Card/Card'
import { Text } from 'shared/ui/Text/Text'
import { Notification } from '../../model/types/notification'
import styles from './NotificationItem.module.scss'

interface NotificationItemProps {
  className?: string
  item: Notification
}

export const NotificationItem: FC<NotificationItemProps> = memo(({ className, item }) => {
  const content = (
    <Card
      theme={CardTheme.OUTLINED}
      className={classNames([styles.container, className])}
    >
      <Text title={item.title}>
        {item.description}
      </Text>
    </Card>
  )

  if (item.href) {
    return (
      <a
        target="_blank"
        href={item.href}
        className={styles.link} rel="noreferrer"
      >
        {content}
      </a>
    )
  }

  return content
})
