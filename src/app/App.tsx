import { getUserMounted, userActions } from '@/entities/User'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppRouter } from './providers/router'

const App = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()
  const mounted = useSelector(getUserMounted)

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div id='app' className={classNames(['app', theme])}>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <div className="contentPage">
          <Sidebar />
          {mounted && <AppRouter />}
        </div>
      </Suspense>
    </div>
  )
}

export default App
