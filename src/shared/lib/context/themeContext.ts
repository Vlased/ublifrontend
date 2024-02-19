import { Theme } from '@/shared/constants/theme'
import { createContext } from 'react'

export interface ThemeContextProps {
  theme?: Theme
  toggleTheme?: () => void
}

export const ThemeContext = createContext<ThemeContextProps>({})
