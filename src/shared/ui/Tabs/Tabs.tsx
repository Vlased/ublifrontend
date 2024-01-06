import React, { useCallback } from 'react'
import { Card, CardTheme } from '../Card/Card'
import styles from './Tabs.module.scss'

export interface TabItem<T extends string> {
  value: T
  content: React.ReactNode
}

interface TabsProps<T extends string> {
  tabs: Array<TabItem<T>>
  value: T
  handleTabClick: (tab: TabItem<T>) => void
}

export const Tabs = <T extends string>({ tabs, value, handleTabClick }: TabsProps<T>) => {
  const handleClick = useCallback((tab: TabItem<T>) => {
    return () => {
      handleTabClick(tab)
    }
  }, [handleTabClick])

  return (
    <div className={styles.container}>
      {tabs.map((tab) => (
        <Card
          className={styles.tab}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          onClick={handleClick(tab)}
          key={tab.value}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  )
}
