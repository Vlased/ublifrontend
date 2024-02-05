import { useTheme } from 'app/providers/ThemeProvider'
import { FC, ReactNode } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import { Overlay } from '../Overlay/Overlay'
import Portal from '../Portal/Portal'
import { VStack } from '../Stack'
import styles from './Drawer.module.scss'

interface DrawerProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

export const Drawer: FC<DrawerProps> = ({
  className,
  children,
  isOpen,
  onClose
}) => {
  const { theme } = useTheme()

  const mods: Mods = {
    [styles.opened]: isOpen
  }

  return (
    <Portal element={document.getElementById('app') ?? undefined}>
      <VStack
        className={classNames([styles.drawer, theme, className], mods)}
        alignItems="flex-end"
      >
        <Overlay handleClick={onClose} />
        <div className={styles.content}>
          {children}
        </div>
      </VStack>
    </Portal>
  )
}
