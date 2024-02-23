import type { Meta, StoryObj } from '@storybook/react'
import { MainAsync as Main } from './Main.async'

const meta = {
  title: 'pages/Main',
  component: Main,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof Main>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {}
}
