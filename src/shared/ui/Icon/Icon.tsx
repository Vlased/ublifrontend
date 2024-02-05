import { FC, SVGProps } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Icon.module.scss'

interface IconProps {
  className?: string
  Svg: FC<SVGProps<SVGSVGElement>>
  inverted?: boolean
}

const Icon: FC<IconProps> = ({ className, Svg, inverted }) => {
  return (
    <Svg
      className={classNames(
        [className, styles.icon],
        { [styles.inverted]: inverted }
      )}
    />
  )
}

export default Icon
