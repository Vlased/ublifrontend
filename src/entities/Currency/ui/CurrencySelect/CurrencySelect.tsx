import { Currency } from '@/shared/constants/currency'
import { ListBox, ListBoxItem } from '@/shared/ui/Popups'
import { FC, memo } from 'react'

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
  return (
    <ListBox<Currency>
      label="Select Currency"
      defaultValue="Select Currency"
      items={currencyOptions}
      value={value}
      onChange={onChange}
      readonly={readonly}
      className={className}
      direction="top-right"
    />
  )
})

export default CurrencySelect
