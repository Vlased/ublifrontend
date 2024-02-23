import { Currency } from '@/shared/constants/currency'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../../Button/Button'
import { Dropdown, DropdownItem } from './Dropdown'

const currencyOptions: DropdownItem[] = [
  {
    content: Currency.EUR
  },
  {
    content: Currency.USD
  },
  {
    content: Currency.UAH
  }
]

const meta = {
  title: 'shared/Popups/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof Dropdown>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    items: currencyOptions,
    trigger: <Button>Open</Button>
  }
}
