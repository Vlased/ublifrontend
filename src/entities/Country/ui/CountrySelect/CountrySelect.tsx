import { FC, memo, useCallback } from 'react'
import { ListBox, ListBoxItem } from 'shared/ui/Popups'
import { Country } from '../../model/const/country'

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
  const handleChange = useCallback((value: string) => {
    onChange?.(value as Country)
  }, [onChange])

  return (
    <ListBox
      label="Select Country"
      defaultValue="Select Country"
      items={countryOptions}
      value={value}
      onChange={handleChange}
      readonly={readonly}
      className={className}
      direction="top-right"
    />
  )
})

export default CountrySelect
