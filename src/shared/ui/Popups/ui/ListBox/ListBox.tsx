import { Listbox as HListBox } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { DropdownDirection } from 'shared/types/ui'
import { Button } from '../../../Button/Button'
import { HStack } from '../../../Stack'
import popupStyles from '../../styles/Popup.module.scss'
import styles from './ListBox.module.scss'

export interface ListBoxItem {
  value: string
  content: ReactNode
  disabled?: boolean
}

interface ListBoxProps<T extends string> {
  className?: string
  items: ListBoxItem[]
  value?: T
  defaultValue: string
  onChange?: (value: T) => void
  readonly?: boolean
  label?: string
  direction?: DropdownDirection
}

export const ListBox = <T extends string>({
  className,
  items,
  value,
  onChange,
  defaultValue,
  readonly,
  label,
  direction = 'bottom-right'
}: ListBoxProps<T>) => {
  const { t } = useTranslation()

  return (
    <HStack
      gap="4px"
      className={className}
    >
      {label && (
        <span>
          {`${t(label)}>`}
        </span>
      )}
      <HListBox
        as="div"
        className={popupStyles.container}
        value={value}
        onChange={onChange}
        disabled={readonly}
      >
        <HListBox.Button className={popupStyles.trigger}>
          <Button disabled={readonly}>
            {t(value ?? defaultValue)}
          </Button>
        </HListBox.Button>
        <HListBox.Options
          className={classNames([styles.options, popupStyles[direction]])}
        >
          {items.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(
                    [styles.item],
                    {
                      [popupStyles.activeItem]: active,
                      [styles.disabledItem]: item.disabled
                    }
                  )}
                >
                  {selected && '!!! '}
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  )
}
