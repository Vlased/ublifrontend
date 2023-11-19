import { createContext } from 'react'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
  ORANGE = 'orange',
}

export interface ThemeContextProps {
  theme?: Theme
  toggleTheme?: () => void
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
