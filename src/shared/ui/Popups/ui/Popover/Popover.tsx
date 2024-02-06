import { Popover as HPopover } from '@headlessui/react'
import { FC, ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { DropdownDirection } from '@/shared/types/ui'
import popupStyles from '../../styles/Popup.module.scss'
import styles from './Popover.module.scss'

interface PopoverProps {
  className?: string
  trigger: ReactNode
  direction?: DropdownDirection
  children: ReactNode
}

export const Popover: FC<PopoverProps> = ({
  className,
  trigger,
  direction = 'bottom-right',
  children
}) => {
  return (
    <HPopover
      as="div"
      className={classNames([popupStyles.container, className])}
    >
      <HPopover.Button className={popupStyles.trigger}>
        {trigger}
      </HPopover.Button>
      <HPopover.Panel className={classNames([styles.panel, popupStyles[direction]])}>
        {children}
      </HPopover.Panel>
    </HPopover>
  )
}
