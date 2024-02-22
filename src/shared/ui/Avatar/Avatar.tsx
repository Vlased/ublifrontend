import ProfileIcon from '@/shared/assets/icons/profile_icon.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { FC, memo } from 'react'
import { AppImage } from '../AppImage'
import { Icon } from '../Icon'
import { Skeleton } from '../Skeleton'
import styles from './Avatar.module.scss'

interface AvatarProps {
  className?: string
  src?: string
  alt?: string
  size?: number
  fallbackInverted?: boolean
}

export const Avatar: FC<AvatarProps> = memo(({ className, src, alt, size, fallbackInverted }) => {
  const loadingFallback = (
    <Skeleton
      width={size}
      height={size}
      border="50%"
      className={className}
    />
  )
  const errorFallback = (
    <Icon
      width={size}
      height={size}
      Svg={ProfileIcon}
      className={className}
      inverted={fallbackInverted}
    />
  )

  return (
    <AppImage
      className={classNames([styles.avatar, className])}
      style={{ width: size, height: size }}
      src={src}
      alt={alt}
      loadingFallback={loadingFallback}
      errorFallback={errorFallback}
    />
  )
})
