import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Text.module.scss'

export enum TextTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export enum TextSize {
  S = 'size_s',
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

type HeaderTagType = 'h1' | 'h2' | 'h3'

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1'
}

export const Text: FC<TextProps> = memo(({
  className,
  title,
  children,
  theme = TextTheme.PRIMARY,
  align = TextAlign.LEFT,
  size = TextSize.M
}) => {
  const { t } = useTranslation()

  const HeaderTag = mapSizeToHeaderTag[size]

  return (
    <div className={classNames([className, styles[theme], styles[align], styles[size]])}>
      {title !== undefined && (
        <HeaderTag className={styles.title}>
          {t(title.toString())}
        </HeaderTag>
      )}
      {children !== undefined && (
        <p className={styles.text}>
          {t(children.toString())}
        </p>
      )}
    </div>
  )
})
