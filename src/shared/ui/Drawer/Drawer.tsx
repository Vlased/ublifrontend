import { FC, ReactNode } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import { useModal } from 'shared/lib/hooks/useModal/useModal'
import { Overlay } from '../Overlay/Overlay'
import Portal from '../Portal/Portal'
import { VStack } from '../Stack'
import styles from './Drawer.module.scss'

interface DrawerProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

export const Drawer: FC<DrawerProps> = ({
  className,
  children,
  isOpen,
  onClose,
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
    <Portal element={document.getElementById('app') ?? undefined}>
      <VStack
        className={classNames([styles.drawer, className], mods)}
        alignItems="flex-end"
      >
        <Overlay handleClick={handleClose} />
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
