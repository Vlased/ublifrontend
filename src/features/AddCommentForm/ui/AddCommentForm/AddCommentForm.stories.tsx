import { ReduxDecorator } from '@/shared/config/storybook/decorators/ReduxDecorator'
import type { Meta, StoryObj } from '@storybook/react'
import { AddCommentFormAsync as AddCommentForm } from './AddCommentForm.async'

const meta = {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  parameters: {
    layout: 'fullscreen'
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
