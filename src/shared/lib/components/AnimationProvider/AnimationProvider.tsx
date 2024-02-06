import { createContext, FC, ReactNode, useContext, useEffect, useMemo, useRef, useState } from 'react'

type SpringType = typeof import('@react-spring/web')
type GestureType = typeof import('@use-gesture/react')

interface AnimationContextPayload {
  Spring?: SpringType
  Gesture?: GestureType
  isLoaded?: boolean
}

const AnimationContext = createContext<AnimationContextPayload>({})

const getAsyncAnimationModules = async () => {
  return await Promise.all([
    import('@react-spring/web'),
    import('@use-gesture/react')
  ])
}

export const useAnimationLibs = () => {
  return useContext(AnimationContext) as Required<AnimationContextPayload>
}

interface AnimationProviderProps {
  children: ReactNode
}

export const AnimationProvider: FC<AnimationProviderProps> = ({ children }) => {
  const SpringRef = useRef<SpringType>()
  const GestureRef = useRef<GestureType>()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    getAsyncAnimationModules().then(([Spring, Gesture]) => {
      SpringRef.current = Spring
      GestureRef.current = Gesture
      setIsLoaded(true)
    })
  }, [])

  const value = useMemo(() => ({
    Spring: SpringRef.current,
    Gesture: GestureRef.current,
    isLoaded
  }), [isLoaded])

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  )
}
