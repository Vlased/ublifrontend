import { useEffect } from 'react'

export const useInitialEffect = (callback: () => void) => {
  useEffect(() => {
    if (PROJECT !== 'storybook') {
      callback()
    }
    // eslint-disable-next-line
  }, [])
}
