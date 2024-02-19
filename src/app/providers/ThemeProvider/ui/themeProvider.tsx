import { LOCAL_STORAGE_THEME_KEY } from '@/shared/constants/localStorage'
import { Theme } from '@/shared/constants/theme'
import { ThemeContext } from '@/shared/lib/context/themeContext'
import { FC, ReactNode, useCallback, useMemo, useState } from 'react'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface ThemeProviderProps {
  children: ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
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
