import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ArticleSortField } from '../../model/const/const'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import ArticleSortSelector from './ArticleSortSelector'

const meta = {
  title: 'entities/ArticleSortSelector',
  component: ArticleSortSelector,
  parameters: {
    layout: 'centered'
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

export const PrimaryDark: Story = {
  args: {
    sort: ArticleSortField.VIEWS,
    order: 'desc',
    handleSortChange: () => null,
    handleOrderChange: () => null
  }
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
