import { useContext } from 'react'
import { ThemeContext, type ThemeContextProps } from './themeContext'

export const useTheme = (): ThemeContextProps => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return { theme, toggleTheme }
}
