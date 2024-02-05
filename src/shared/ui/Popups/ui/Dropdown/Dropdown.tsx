import { Menu } from '@headlessui/react'
import { FC, Fragment, ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { DropdownDirection } from 'shared/types/ui'
import { AppLink } from '../../../AppLink/AppLink'
import popupStyles from '../../styles/Popup.module.scss'
import styles from './Dropdown.module.scss'

export interface DropdownItem {
  onClick?: () => void
  content: ReactNode
  disabled?: boolean
  href?: string
}

interface DropdownProps {
  className?: string
  items: DropdownItem[]
  trigger: ReactNode
  direction?: DropdownDirection
}

export const Dropdown: FC<DropdownProps> = ({
  className,
  items,
  trigger,
  direction = 'bottom-right'
}) => {
  return (
    <Menu
      as="div"
      className={classNames([popupStyles.container, className])}
    >
      <Menu.Button className={popupStyles.trigger}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={classNames([styles.menu, popupStyles[direction]])}>
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              onClick={item.onClick}
              className={classNames(
                [styles.item],
                { [popupStyles.activeItem]: active }
              )}
              disabled={item.disabled}
              type="button"
            >
              {item.content}
            </button>
          )

          if (item.href) {
            return (
              <Menu.Item
                as={AppLink}
                disabled={item.disabled}
                to={item.href}
                key={`dropdown-item-${index}`}
              >
                {content}
              </Menu.Item>
            )
          }

          return (
            <Menu.Item
              as={Fragment}
              disabled={item.disabled}
              key={`dropdown-item-${index}`}
            >
              {content}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}
