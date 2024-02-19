import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/shared/constants/theme'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { StarRating } from './StarRating'

const meta = {
  title: 'shared/StarRating',
  component: StarRating,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof StarRating>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}

export const PrimaryDark: Story = {
  args: {}
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const AlreadySelected: Story = {
  args: {
    selectedStars: 3
  }
}

export const AlreadySelectedDark: Story = {
  args: {
    selectedStars: 3
  }
}

AlreadySelectedDark.decorators = [ThemeDecorator(Theme.DARK)]
