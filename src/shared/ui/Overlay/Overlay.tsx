import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Overlay.module.scss'

interface OverlayProps {
  className?: string
  handleClick?: () => void
}

export const Overlay: FC<OverlayProps> = ({ className, handleClick }) => {
  return (
    <div
      className={classNames([styles.overlay, className])}
      onClick={handleClick}
    />
  )
}
