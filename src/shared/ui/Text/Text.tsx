import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Text.module.scss'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export enum TextSize {
  M = 'size_m',
  L = 'size_l',
}

interface TextProps {
  className?: string
  title?: string | number
  children?: string | number
  theme?: TextTheme
  align?: TextAlign
  size?: TextSize
}

export const Text: React.FC<TextProps> = memo(({
  className,
  title,
  children,
  theme = TextTheme.PRIMARY,
  align = TextAlign.LEFT,
  size = TextSize.M
}) => {
  const { t } = useTranslation()
  return (
    <div className={classNames([className, styles[theme], styles[align], styles[size]])}>
      {title !== undefined && (
        <p className={styles.title}>
          {t(title.toString())}
        </p>
      )}
      {children !== undefined && (
        <p className={styles.text}>
          {t(children.toString())}
        </p>
      )}
    </div>
  )
})
