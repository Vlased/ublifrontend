import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/shared/constants/theme'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { Input } from './Input'

const meta = {
  title: 'shared/Input',
  component: Input,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    placeholder: 'Text',
    autoFocus: true
  }
}

export const PrimaryDark: Story = {
  args: {
    placeholder: 'Text'
  }
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
