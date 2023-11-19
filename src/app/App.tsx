import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/ui/Navbar'
import { Sidebar } from 'widgets/ui/Sidebar'
import { Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'

const App = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div id='app' className={classNames(['app', theme])}>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <div className="contentPage">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
