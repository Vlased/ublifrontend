import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { ForbiddenPage } from './ForbiddenPage'

const meta = {
  title: 'pages/ForbiddenPage',
  component: ForbiddenPage,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof ForbiddenPage>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}

export const PrimaryDark: Story = {
  args: {}
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]