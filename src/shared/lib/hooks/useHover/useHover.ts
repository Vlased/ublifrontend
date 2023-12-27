import { useCallback, useMemo, useState } from 'react'

interface UseHoverBind {
  handleMouseEnter: () => void
  handleMouseLeave: () => void
}

type UseHoverResult = [boolean, UseHoverBind]

export const useHover = (): UseHoverResult => {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
  }, [])

  return useMemo(() => [
    isHovered,
    {
      handleMouseEnter,
      handleMouseLeave
    }
  ], [
    isHovered,
    handleMouseEnter,
    handleMouseLeave
  ])
}
