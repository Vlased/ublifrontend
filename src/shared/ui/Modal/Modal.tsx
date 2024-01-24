import { FC, MouseEvent, ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import Portal from '../Portal/Portal'
import styles from './Modal.module.scss'

interface ModalProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
  disablePortal?: boolean
  lazy?: boolean
}

const CLOSING_DELAY = 150

export const Modal: FC<ModalProps> = ({
  className,
  children,
  isOpen,
  onClose,
  disablePortal,
  lazy
}) => {
  const [isClosing, setIsClosing] = useState<boolean>(false)
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  const handleClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, CLOSING_DELAY)
    }
  }, [onClose])

  const handleContentClick = useCallback((e: MouseEvent) => {
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

  const mods: Mods = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing
  }

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal
      disablePortal={disablePortal}
      element={document.getElementById('app') ?? undefined}
    >
      <div className={classNames([styles.modal, className], mods)}>
        <div className={styles.overlay} onClick={handleClose}>
          <div
            className={styles.content}
            onClick={handleContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
