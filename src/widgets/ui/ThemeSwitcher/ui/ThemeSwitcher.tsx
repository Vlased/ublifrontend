import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ThemeSwitcher.module.scss'
import LightIcon from 'shared/assets/icons/theme_light.svg'
import DarkIcon from 'shared/assets/icons/theme_dark.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { memo } from 'react'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = memo(({ className = '' }) => {
  const { toggleTheme, theme } = useTheme()

  return (
    <Button
      onClick={toggleTheme}
      style={{ padding: 0, display: 'flex', margin: 0 }}
      theme={ButtonTheme.CLEAR}>
      {theme === Theme.DARK
        ? (
          <DarkIcon className={classNames([styles.themeSwitcher, className])} />
        )
        : (
          <LightIcon className={classNames([styles.themeSwitcher, className])} />
        )}
    </Button>
  )
})
