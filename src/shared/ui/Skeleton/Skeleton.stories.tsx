import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof Skeleton>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    width: '50%',
    height: 100
  }
}

export const Circle: Story = {
  args: {
    border: '50%',
    height: 100,
    width: 100
  }
}
