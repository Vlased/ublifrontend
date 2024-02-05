import { MouseEvent, useCallback, useEffect, useRef, useState } from 'react'

interface UseModalProps {
  onClose?: () => void
  isOpen?: boolean
  animationDelay?: number
}

export const useModal = ({ onClose, isOpen, animationDelay = 150 }: UseModalProps) => {
  const [isClosing, setIsClosing] = useState<boolean>(false)
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  const handleClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, animationDelay)
    }
  }, [onClose, animationDelay])

  const handleContentClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }, [])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose()
    }
  }, [handleClose])

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  return {
    isClosing,
    isMounted,
    handleContentClick,
    handleClose
  }
}
