import type { Meta, StoryFn, StoryObj } from '@storybook/react'
import { NotificationButton } from './NotificationButton'

const meta = {
  title: 'features/NotificationButton',
  component: NotificationButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  decorators: [(Story: StoryFn) => <div style={{ width: '325px' }}><Story /></div>]
} as Meta<typeof NotificationButton>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}
