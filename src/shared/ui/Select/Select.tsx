import { ChangeEvent, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Select.module.scss'

export interface SelectOptionType<T extends string> {
  value: T
  content: string
}

interface SelectProps<T extends string> {
  className?: string
  label?: string
  options?: Array<SelectOptionType<T>>
  value?: T
  onChange?: (value: T) => void
  readonly?: boolean
}

export const Select = <T extends string>({
  className,
  label,
  options,
  value,
  onChange,
  readonly
}: SelectProps<T>) => {
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
    onChange?.(e.target.value as T)
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
}
