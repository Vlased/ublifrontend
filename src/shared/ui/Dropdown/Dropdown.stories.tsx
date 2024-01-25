import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Currency } from '../../../entities/Currency'
import { Button } from '../Button/Button'
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
  title: 'shared/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered'
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

export const PrimaryDark: Story = {
  args: {
    items: currencyOptions,
    trigger: <Button>Open</Button>
  }
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
