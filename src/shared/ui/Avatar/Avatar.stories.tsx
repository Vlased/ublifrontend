import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

export const Big: Story = {
  args: {
    size: 150,
    src: 'https://www.w3schools.com/w3css/img_avatar3.png',
    alt: 'Big Avatar'
  }
}

export const Small: Story = {
  args: {
    size: 75,
    src: 'https://www.w3schools.com/w3css/img_avatar3.png',
    alt: 'Small Avatar'
  }
}
