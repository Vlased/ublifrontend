import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ReduxDecorator } from '@/shared/config/storybook/decorators/ReduxDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import LoginForm from './LoginForm'

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof LoginForm>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}

export const PrimaryDark: Story = {
  args: {}
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const PrimaryWithError: Story = {
  args: {}
}

PrimaryWithError.decorators = [ReduxDecorator({
  loginForm: {
    username: 'username',
    password: 'password',
    isLoading: false,
    error: 'Some guffy error'
  }
})]

export const PrimaryWithLoading: Story = {
  args: {}
}

PrimaryWithLoading.decorators = [ReduxDecorator({
  loginForm: {
    username: 'username',
    password: 'password',
    isLoading: true
  }
})]
