import React, { HTMLAttributes } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Card.module.scss'

interface CardProps {
  className?: string
  children: React.ReactNode
}

export const Card: React.FC<CardProps & HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={classNames([styles.container, className])}
      {...props}
    >
      {children}
    </div>
  )
}
