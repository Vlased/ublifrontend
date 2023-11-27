import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Icon.module.scss'

interface IconProps {
  className?: string
  Svg: React.FC<React.SVGProps<SVGSVGElement>>
}

const Icon: React.FC<IconProps> = ({ className, Svg }) => {
  return (
    <Svg className={classNames([className, styles.icon])} />
  )
}

export default Icon
