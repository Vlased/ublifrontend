import { ReduxDecorator } from '@/shared/config/storybook/decorators/ReduxDecorator'
import type { Meta, StoryObj } from '@storybook/react'
import { Navbar } from './Navbar'

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof Navbar>

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
    authData: {
      avatar: 'https://www.w3schools.com/w3css/img_avatar3.png'
    }
  }
})]
