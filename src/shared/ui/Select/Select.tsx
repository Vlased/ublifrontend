import React, { ChangeEvent, memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Select.module.scss'

export interface SelectOptionType {
  value: string
  content: string
}

interface SelectProps {
  className?: string
  label?: string
  options?: SelectOptionType[]
  value?: string
  onChange?: (value: string) => void
  readonly?: boolean
}

export const Select: React.FC<SelectProps> = memo(({
  className,
  label,
  options,
  value,
  onChange,
  readonly
}) => {
  const { t } = useTranslation()

  const optionsList = useMemo(() => options?.map((option) => (
    <option
      className={styles.option}
      value={option.value}
      key={option.value}
    >
      {option.content}
    </option>
  )), [options])

  const handleChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value)
  }, [onChange])

  return (
    <div className={classNames([styles.wrapper, className])}>
      {label && (
        <span className={styles.label}>
          {`${t(label)}>`}
        </span>
      )}
      <select
        className={styles.select}
        value={value}
        onChange={handleChange}
        disabled={readonly}
      >
        {optionsList}
      </select>
    </div>
  )
})
