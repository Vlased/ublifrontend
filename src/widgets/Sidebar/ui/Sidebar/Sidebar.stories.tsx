import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/shared/constants/theme'
import { ReduxDecorator } from '@/shared/config/storybook/decorators/ReduxDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { Sidebar } from './Sidebar'

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof Sidebar>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {}
}

export const Dark: Story = {
  args: {}
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const LoggedIn: Story = {
  args: {}
}

LoggedIn.decorators = [ReduxDecorator({
  user: {
    authData: {}
  }
})]
