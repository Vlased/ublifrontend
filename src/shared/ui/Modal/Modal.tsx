import { FC, ReactNode } from 'react'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import { useModal } from '@/shared/lib/hooks/useModal/useModal'
import { Overlay } from '../Overlay/Overlay'
import Portal from '../Portal/Portal'
import { VStack } from '../Stack'
import styles from './Modal.module.scss'

interface ModalProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
  disablePortal?: boolean
  lazy?: boolean
}

export const Modal: FC<ModalProps> = ({
  className,
  children,
  isOpen,
  onClose,
  disablePortal,
  lazy
}) => {
  const {
    isClosing,
    isMounted,
    handleContentClick,
    handleClose
  } = useModal({
    onClose,
    isOpen
  })

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
      <VStack
        className={classNames([styles.modal, className], mods)}
        justifyContent="center"
      >
        <Overlay handleClick={handleClose}/>
        <div
          className={styles.content}
          onClick={handleContentClick}
        >
          {children}
        </div>
      </VStack>
    </Portal>
  )
}
