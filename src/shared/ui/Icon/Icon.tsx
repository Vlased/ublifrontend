import { FC, SVGProps } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Icon.module.scss'

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string
  Svg: FC<SVGProps<SVGSVGElement>>
  inverted?: boolean
}

export const Icon: FC<IconProps> = ({ className, Svg, inverted, ...props }) => {
  return (
    <Svg
      className={classNames(
        [className, styles.icon],
        { [styles.inverted]: inverted }
      )}
      {...props}
    />
  )
}
