import type { Meta, StoryObj } from '@storybook/react'
import { AboutAsync as About } from './About.async'

const meta = {
  title: 'pages/About',
  component: About,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof About>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {}
}
