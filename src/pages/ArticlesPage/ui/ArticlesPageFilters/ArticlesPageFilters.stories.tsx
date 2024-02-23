import type { Meta, StoryObj } from '@storybook/react'
import ArticlesPageFilters from './ArticlesPageFilters'

const meta = {
  title: 'pages/ArticlesPage/ArticlesPageFilters',
  component: ArticlesPageFilters,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof ArticlesPageFilters>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {}
}
