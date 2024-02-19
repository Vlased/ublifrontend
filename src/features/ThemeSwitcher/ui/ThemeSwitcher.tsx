import FigmaIcon from '@/shared/assets/icons/figma_icon.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { FC, memo } from 'react'
import styles from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
  const { toggleTheme } = useTheme()

  return (
    <Button
      onClick={toggleTheme}
      style={{ padding: 0, display: 'flex', margin: 0 }}
      theme={ButtonTheme.CLEAR}>
      <FigmaIcon className={classNames([styles.themeSwitcher, className])} />
    </Button>
  )
})
