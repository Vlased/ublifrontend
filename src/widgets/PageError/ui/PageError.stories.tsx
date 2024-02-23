import type { Meta, StoryObj } from '@storybook/react'
import { PageError } from './PageError'

const meta = {
  title: 'widgets/PageError',
  component: PageError,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof PageError>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {}
}
