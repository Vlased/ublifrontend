import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'

const meta = {
  title: 'shared/Select',
  component: Select,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Enter Some Value',
    options: [
      {
        value: '1',
        content: 'First option'
      },
      {
        value: '2',
        content: 'Second option'
      },
      {
        value: '3',
        content: 'Third option'
      }
    ]
  }
}
