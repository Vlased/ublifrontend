import { FC, memo, useCallback } from 'react'
import { ListBox, ListBoxItem } from 'shared/ui/ListBox/ListBox'
import { Currency } from '../../model/types/currency'

const currencyOptions: ListBoxItem[] = [
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
    <ListBox
      label="Select Currency"
      defaultValue="Select Currency"
      items={currencyOptions}
      value={value}
      onChange={handleChange}
      readonly={readonly}
      className={className}
      direction="top"
    />
  )
})

export default CurrencySelect
