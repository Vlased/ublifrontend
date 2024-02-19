import { FC, memo, useCallback, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import { Flex, VStack } from '@/shared/ui/Stack'
import { getAuthData } from '@/entities/User'
import { LangSwitcher } from '@/features/LangSwitcher'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import SidebarItem from '../SidebarItem/SidebarItem'
import styles from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = memo(({ className = '' }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
  const auth = useSelector(getAuthData)
  const sidebarItemsList = useSelector(getSidebarItems)

  const toggleCollapsed = useCallback(() => {
    setIsCollapsed(prevValue => !prevValue)
  }, [])

  const linksItems = useMemo(() => sidebarItemsList
    .filter((item) => !item.authOnly || auth)
    .map((item) => (
      <SidebarItem
        key={item.path}
        item={item}
        isCollapsed={isCollapsed}
      />
    )), [isCollapsed, auth, sidebarItemsList])

  return (
    <aside
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
      <VStack
        className={styles.items}
        alignItems="flex-start"
        role="navigation"
      >
        {linksItems}
      </VStack>
      <Flex
        className={styles.switchers}
        gap="16px"
        justifyContent="center"
        flexDirection={isCollapsed ? 'column' : 'row'}
        max
      >
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang} short={isCollapsed} />
      </Flex>
    </aside>
  )
})
