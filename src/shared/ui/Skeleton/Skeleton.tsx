import { CSSProperties, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import mainStyles from './Skeleton.module.scss'

interface SkeletonProps {
  className?: string
  width?: string | number
  height?: string | number
  border?: string
}

export const Skeleton: React.FC<SkeletonProps> = memo(({
  className,
  width,
  height,
  border
}) => {
  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border
  }

  return (
    <div
      style={styles}
      className={classNames([className, mainStyles.container])}
    />
  )
})
