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

interface TextProps {
  className?: string
  title?: string
  children?: string
  theme?: TextTheme
  align?: TextAlign
}

export const Text: React.FC<TextProps> = memo(({
  className,
  title,
  children,
  theme = TextTheme.PRIMARY,
  align = TextAlign.LEFT
}) => {
  const { t } = useTranslation()
  return (
    <div className={classNames([className, styles[theme], styles[align]])}>
      {title && <p className={styles.title}>{t(title)}</p>}
      {children && <p className={styles.text}>{t(children)}</p>}
    </div>
  )
})
