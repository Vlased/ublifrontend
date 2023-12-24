import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { AddCommentFormAsync as AddCommentForm } from './AddCommentForm.async'

const meta = {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof AddCommentForm>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    handleCommentSend: () => {}
  }
}

export const Dark: Story = {
  args: {
    handleCommentSend: () => {}
  }
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
