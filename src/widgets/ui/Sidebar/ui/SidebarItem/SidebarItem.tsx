import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { SidebarItemType } from '../../model/items'
import styles from './SidebarItem.module.scss'

interface SidebarItemProps {
  item: SidebarItemType
  isCollapsed: boolean
}

const SidebarItem: React.FC<SidebarItemProps> = memo(({ item, isCollapsed }) => {
  const { t } = useTranslation()
  const { Icon } = item

  return (
    <AppLink
      to={item.path}
      className={styles.item}
      theme={AppLinkTheme.INVERTED}
    >
      <Icon
        className={styles.icon}
      />
      <span className={classNames([styles.link], { [styles.collapsedLink]: isCollapsed })}>
        {t(item.text)}
      </span>
    </AppLink>
  )
})

export default SidebarItem
