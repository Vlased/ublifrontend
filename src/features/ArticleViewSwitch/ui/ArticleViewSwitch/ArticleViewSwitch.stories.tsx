import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ArticleView } from '@/entities/Article'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import ArticleViewSwitch from './ArticleViewSwitch'

const meta = {
  title: 'features/ArticleViewSwitch',
  component: ArticleViewSwitch,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof ArticleViewSwitch>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    view: ArticleView.GRID,
    handleViewChange: () => null
  }
}

export const Dark: Story = {
  args: {
    view: ArticleView.GRID,
    handleViewChange: () => null
  }
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
