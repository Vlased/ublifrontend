import { memo, useCallback, useMemo, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { LangSwitcher } from 'widgets/ui/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ui/ThemeSwitcher'
import styles from './Sidebar.module.scss'
import { sidebarItemsList } from '../../model/items'
import SidebarItem from '../SidebarItem/SidebarItem'

interface SidebarProps {
  className?: string
}

export const Sidebar: React.FC<SidebarProps> = memo(({ className = '' }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  const toggleCollapsed = useCallback(() => {
    setIsCollapsed(prevValue => !prevValue)
  }, [])

  const linksItems = useMemo(() => sidebarItemsList.map((item) => (
    <SidebarItem
      key={item.path}
      item={item}
      isCollapsed={isCollapsed}
    />
  )), [isCollapsed])

  return (
    <div
      data-testid='sidebar'
      className={classNames([styles.sidebar, className], { [styles.collapsed]: isCollapsed })}
    >
      <Button
        data-testid='sidebar-toggle'
        onClick={toggleCollapsed}
        className={styles.collapseButton}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {isCollapsed ? '>' : '<'}
      </Button>
      <div className={styles.items}>
        {linksItems}
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang} short={isCollapsed} />
      </div>
    </div>
  )
})
