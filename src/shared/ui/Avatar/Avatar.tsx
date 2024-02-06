import { FC, memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Avatar.module.scss'

interface AvatarProps {
  className?: string
  src?: string
  alt?: string
  size?: number
}

export const Avatar: FC<AvatarProps> = memo(({ className, src, alt, size }) => {
  return (
    <img
      className={classNames([styles.avatar, className])}
      style={{ width: size, height: size }}
      src={src}
      alt={alt}
    />
  )
})
