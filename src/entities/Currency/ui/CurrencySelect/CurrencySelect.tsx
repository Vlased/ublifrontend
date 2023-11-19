import { Currency } from '../../model/types/currency'
import { Select, SelectOptionType } from 'shared/ui/Select/Select'
import { memo, useCallback } from 'react'

const currencyOptions: SelectOptionType[] = [
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

const CurrencySelect: React.FC<CurrencySelectProps> = memo(({
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
