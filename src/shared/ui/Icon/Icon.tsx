import { FC, SVGProps } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Icon.module.scss'

interface IconProps {
  className?: string
  Svg: FC<SVGProps<SVGSVGElement>>
}

const Icon: FC<IconProps> = ({ className, Svg }) => {
  return (
    <Svg className={classNames([className, styles.icon])} />
  )
}

export default Icon
