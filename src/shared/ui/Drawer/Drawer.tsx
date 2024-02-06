import { FC, ReactNode, useCallback, useEffect } from 'react'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import { useAnimationLibs } from '@/shared/lib/components/AnimationProvider/AnimationProvider'
import { useModal } from '@/shared/lib/hooks/useModal/useModal'
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

const HEIGHT = window.innerHeight - 100

const DrawerContent: FC<DrawerProps> = ({
  className,
  children,
  isOpen,
  onClose,
  lazy
}) => {
  const { Spring, Gesture } = useAnimationLibs()
  const {
    isMounted,
    handleContentClick,
    handleClose
  } = useModal({
    onClose,
    isOpen
  })

  const [{ y }, api] = Spring.useSpring(() => ({ y: HEIGHT }))

  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false })
  }, [api])

  useEffect(() => {
    if (isOpen) {
      openDrawer()
    }
  }, [isOpen, openDrawer])

  const close = useCallback((velocity = 0) => {
    api.start({
      y: HEIGHT,
      immediate: false,
      config: {
        ...Spring.config.stiff,
        velocity
      },
      onResolve: onClose
    })
  }, [onClose, Spring.config.stiff, api])

  const bind = Gesture.useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel
    }) => {
      if (my < -70) cancel()

      if (last) {
        if (my > HEIGHT * 0.5 || (vy > 0.5 && dy > 0)) {
          close()
        } else {
          openDrawer()
        }
      } else {
        api.start({ y: my, immediate: true })
      }
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true
    }
  )

  if (lazy && !isMounted) {
    return null
  }

  const display = y.to((py) => (py < HEIGHT ? 'block' : 'none'))

  const mods: Mods = {
    [styles.opened]: isOpen
  }

  return (
    <Portal element={document.getElementById('app') ?? undefined}>
      <VStack
        className={classNames([styles.drawer, className], mods)}
        alignItems="flex-end"
      >
        <Overlay handleClick={handleClose} />
        <Spring.a.div
          className={styles.sheet}
          style={{ display, bottom: `calc(-100vh + ${HEIGHT - 100}px)`, y }}
          onClick={handleContentClick}
          {...bind()}
        >
          {children}
        </Spring.a.div>
      </VStack>
    </Portal>
  )
}

export const Drawer: FC<DrawerProps> = (props) => {
  const { isLoaded } = useAnimationLibs()

  if (!isLoaded) {
    return null
  }

  return (
    <DrawerContent {...props} />
  )
}
