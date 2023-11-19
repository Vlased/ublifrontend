import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ThemeSwitcher.module.scss'
import FigmaIcon from 'shared/assets/icons/figma_icon.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { memo } from 'react'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = memo(({ className }) => {
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
