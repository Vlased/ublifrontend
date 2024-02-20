import { Country } from '@/shared/constants/country'
import { ListBox, ListBoxItem } from '@/shared/ui/Popups'
import { FC, memo } from 'react'

const countryOptions: ListBoxItem[] = [
  {
    value: Country.France,
    content: Country.France
  },
  {
    value: Country.USA,
    content: Country.USA
  },
  {
    value: Country.Ukraine,
    content: Country.Ukraine
  }
]

interface CountrySelectProps {
  className?: string
  value?: Country
  onChange?: (value: Country) => void
  readonly?: boolean
}

const CountrySelect: FC<CountrySelectProps> = memo(({
  className,
  value,
  onChange,
  readonly
}) => {
  return (
    <ListBox<Country>
      label="Select Country"
      defaultValue="Select Country"
      items={countryOptions}
      value={value}
      onChange={onChange}
      readonly={readonly}
      className={className}
      direction="top-right"
    />
  )
})

export default CountrySelect
