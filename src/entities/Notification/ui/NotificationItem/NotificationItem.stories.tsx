import type { Meta, StoryObj } from '@storybook/react'

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
    layout: 'fullscreen'
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
