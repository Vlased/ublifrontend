import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/shared/constants/theme'
import { ReduxDecorator } from '@/shared/config/storybook/decorators/ReduxDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
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

Light.decorators = [ReduxDecorator({
  addCommentForm: {
    text: 'abababa'
  }
})]

export const Dark: Story = {
  args: {
    handleCommentSend: () => {}
  }
}

Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  ReduxDecorator({
    addCommentForm: {
      text: 'abababa'
    }
  })
]
