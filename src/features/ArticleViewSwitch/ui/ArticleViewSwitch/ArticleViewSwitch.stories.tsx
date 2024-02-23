import { ArticleView } from '@/entities/Article'
import type { Meta, StoryObj } from '@storybook/react'
import ArticleViewSwitch from './ArticleViewSwitch'

const meta = {
  title: 'features/ArticleViewSwitch',
  component: ArticleViewSwitch,
  parameters: {
    layout: 'fullscreen'
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
