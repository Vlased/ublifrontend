import React, { memo } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './AppLink.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface AppLinkProps {
  className?: string
  children?: React.ReactNode
  theme?: AppLinkTheme
}

export const AppLink: React.FC<AppLinkProps & LinkProps> = memo(({
  className = '',
  theme = AppLinkTheme.PRIMARY,
  children,
  ...props
}) => {
  return (
    <Link
      className={classNames([styles[theme], className])}
      {...props}>
      {children}
    </Link>
  )
})
