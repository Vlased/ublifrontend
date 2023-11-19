import { useCallback, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/themeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface ThemeProviderProps {
  children: React.ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const toggleTheme = useCallback(() => {
    let newTheme: Theme
    switch (theme) {
    case Theme.DARK: {
      newTheme = Theme.LIGHT
      break
    }
    case Theme.LIGHT: {
      newTheme = Theme.ORANGE
      break
    }
    case Theme.ORANGE: {
      newTheme = Theme.DARK
      break
    }
    default: {
      newTheme = Theme.LIGHT
    }
    }
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }, [theme])

  const defaultProps = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
