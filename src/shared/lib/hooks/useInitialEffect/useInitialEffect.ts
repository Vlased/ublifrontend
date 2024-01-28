import { useEffect } from 'react'

export const useInitialEffect = (callback: () => void) => {
  useEffect(() => {
    if (PROJECT !== 'storybook' && PROJECT !== 'jest') {
      callback()
    }
    // eslint-disable-next-line
  }, [])
}
