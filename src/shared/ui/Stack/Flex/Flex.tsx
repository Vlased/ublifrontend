import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Flex.module.scss'

export type FlexJustify = 'space-between' | 'center' | 'space-evenly' | 'space-around' | 'flex-start' | 'flex-end'
export type FlexAlign = 'center' | 'flex-start' | 'flex-end'
export type FlexDirection = 'row' | 'column'
export type FlexGap = '0px' | '1px' | '2px' | '4px' | '8px' | '16px' | '32px'

export interface FlexProps {
  className?: string
  children: React.ReactNode
  justifyContent?: FlexJustify
  alignItems?: FlexAlign
  flexDirection?: FlexDirection
  gap?: FlexGap
  max?: boolean
}

export const Flex: React.FC<FlexProps> = ({
  className,
  children,
  justifyContent = 'flex-start',
  alignItems = 'center',
  flexDirection = 'row',
  gap = '0px',
  max
}) => {
  return (
    <div
      className={classNames([styles.container, className], { [styles.max]: max })}
      style={{
        justifyContent,
        alignItems,
        flexDirection,
        gap
      }}
    >
      {children}
    </div>
  )
}
