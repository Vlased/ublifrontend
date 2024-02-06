import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { Button, ButtonTheme } from '../../../Button/Button'
import { Popover } from './Popover'

const meta = {
  title: 'shared/Popover',
  component: Popover,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof Popover>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    trigger: (
      <Button theme={ButtonTheme.CLEAR}>
        Text
      </Button>
    ),
    children: 'Another text'
  }
}

export const PrimaryDark: Story = {
  args: {
    trigger: (
      <Button theme={ButtonTheme.CLEAR}>
        Text
      </Button>
    ),
    children: 'Another text'
  }
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
