import { ReduxDecorator } from '@/shared/config/storybook/decorators/ReduxDecorator'
import type { Meta, StoryObj } from '@storybook/react'
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

export const LoggedIn: Story = {
  args: {}
}

LoggedIn.decorators = [ReduxDecorator({
  user: {
    authData: {}
  }
})]
