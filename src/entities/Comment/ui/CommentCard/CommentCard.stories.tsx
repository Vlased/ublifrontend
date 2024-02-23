import type { Meta, StoryObj } from '@storybook/react'
import CommentCard from './CommentCard'

const meta = {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof CommentCard>

export default meta

type Story = StoryObj<typeof meta>

const comment = {
  id: '1',
  text: 'Some comment here',
  user: {
    id: '1',
    username: 'username',
    avatar: 'https://miro.medium.com/v2/resize:fit:679/0*ngAthWxOvKZHvsw9'
  }
}

export const Light: Story = {
  args: {
    comment
  }
}

export const Loading: Story = {
  args: {
    isLoading: true
  }
}
