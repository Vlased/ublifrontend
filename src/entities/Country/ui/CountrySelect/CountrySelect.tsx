import { Select, SelectOptionType } from 'shared/ui/Select/Select'
import { memo, useCallback } from 'react'
import { Country } from '../../model/types/country'

const currencyOptions: Array<SelectOptionType<Country>> = [
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

const CountrySelect: React.FC<CountrySelectProps> = memo(({
  className,
  value,
  onChange,
  readonly
}) => {
  const handleChange = useCallback((value: string) => {
    onChange?.(value as Country)
  }, [onChange])

  return (
    <Select
      label="Select Country"
      options={currencyOptions}
      value={value}
      onChange={handleChange}
      readonly={readonly}
      className={className}
    />
  )
})

export default CountrySelect
