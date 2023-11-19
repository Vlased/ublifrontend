import React, { memo, type ButtonHTMLAttributes } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINED = 'outlined',
  OUTLINED_RED = 'outlinedRed',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
  disabled?: boolean
}

export const Button: React.FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = memo(({
  className = '',
  children,
  theme = ButtonTheme.OUTLINED,
  square,
  disabled,
  size = ButtonSize.M,
  ...props
}) => {
  const classes = [
    styles.button,
    styles[theme],
    styles[size],
    className
  ]

  const mods: Mods = {
    [styles.square]: square,
    [styles.disabled]: disabled
  }

  return (
    <button
      className={classNames(classes, mods)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
})
