import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { Rating } from './Rating'

const meta = {
  title: 'entities/Rating',
  component: Rating,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof Rating>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    title: 'Rate this article',
    feedbackTitle: 'Type your feedback on this article',
    hasFeedback: true
  }
}

export const PrimaryDark: Story = {
  args: {
    title: 'Rate this article',
    feedbackTitle: 'Type your feedback on this article',
    hasFeedback: true
  }
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
