import { ChangeEvent, FC, InputHTMLAttributes, memo, useCallback, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps {
  className?: string
  value?: string | number
  onChange?: (value: string) => void
  autoFocus?: boolean
  readonly?: boolean
}

export const Input: FC<InputProps & HTMLInputProps> = memo(({
  className,
  value,
  onChange,
  placeholder,
  type = 'text',
  autoFocus,
  readonly,
  ...props
}) => {
  const { t } = useTranslation()
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [caretPosition, setCaretPosition] = useState<number>(0)
  const ref = useRef<HTMLInputElement>(null)
  const isCaretVisible = isFocused && !readonly

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true)
      ref.current?.focus()
    }
  }, [autoFocus])

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
    setCaretPosition(e.target.value.length)
  }, [onChange])

  const onBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  const onFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const onSelect = useCallback((e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0)
  }, [])

  return (
    <div className={classNames([className, styles.inputContainer])}>
      {placeholder && (
        <div className={styles.placeholder}>
          {`${t(placeholder)}>`}
        </div>
      )}
      <div className={styles.caretWrapper}>
        <input
          className={classNames([styles.input], { [styles.editing]: readonly })}
          type={type}
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          onFocus={onFocus}
          onSelect={onSelect}
          readOnly={readonly}
          {...props}
        />
        {isCaretVisible && (
          <span
            className={styles.caret}
            style={{ left: `${caretPosition * 9 * 9 / 10}px` }}
          />
        )}
      </div>
    </div>
  )
})

Input.displayName = 'Input'
