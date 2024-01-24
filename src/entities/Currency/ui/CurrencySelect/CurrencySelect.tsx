import { FC, memo, useCallback } from 'react'
import { Select, SelectOptionType } from 'shared/ui/Select/Select'
import { Currency } from '../../model/types/currency'

const currencyOptions: Array<SelectOptionType<Currency>> = [
  {
    value: Currency.EUR,
    content: Currency.EUR
  },
  {
    value: Currency.USD,
    content: Currency.USD
  },
  {
    value: Currency.UAH,
    content: Currency.UAH
  }
]

interface CurrencySelectProps {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
  readonly?: boolean
}

const CurrencySelect: FC<CurrencySelectProps> = memo(({
  className,
  value,
  onChange,
  readonly
}) => {
  const handleChange = useCallback((value: string) => {
    onChange?.(value as Currency)
  }, [onChange])

  return (
    <Select
      label="Select Currency"
      options={currencyOptions}
      value={value}
      onChange={handleChange}
      readonly={readonly}
      className={className}
    />
  )
})

export default CurrencySelect
