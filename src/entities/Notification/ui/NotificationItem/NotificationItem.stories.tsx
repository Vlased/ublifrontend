import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'

import { NotificationItem } from './NotificationItem'

const item = {
  id: '1',
  title: 'Notification 1',
  description: 'Some event happened',
  userId: '1'
}

const meta = {
  title: 'entities/Notification/NotificationItem',
  component: NotificationItem,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof NotificationItem>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    item
  }
}

export const PrimaryDark: Story = {
  args: {
    item
  }
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
