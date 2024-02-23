import type { Meta, StoryObj } from '@storybook/react'
import { ArticleSortField } from '../../../../entities/Article/model/const/const'
import { ArticleSortSelector } from './ArticleSortSelector'

const meta = {
  title: 'entities/Article/ArticleSortSelector',
  component: ArticleSortSelector,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof ArticleSortSelector>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    sort: ArticleSortField.CREATED_AT,
    order: 'asc',
    handleSortChange: () => null,
    handleOrderChange: () => null
  }
}
