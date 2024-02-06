import { FC, HTMLAttributes, ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Card.module.scss'

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined'
}

interface CardProps {
  className?: string
  children: ReactNode
  theme?: CardTheme
}

export const Card: FC<CardProps & HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  theme = CardTheme.NORMAL,
  ...props
}) => {
  return (
    <div
      className={classNames([styles.container, styles[theme], className])}
      {...props}
    >
      {children}
    </div>
  )
}
