import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/shared/constants/theme'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { AppLink, AppLinkTheme } from './AppLink'

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof AppLink>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Test',
    theme: AppLinkTheme.PRIMARY
  }
}

export const PrimaryDark: Story = {
  args: {
    children: 'Test',
    theme: AppLinkTheme.PRIMARY
  }
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Inverted: Story = {
  args: {
    children: 'Test',
    theme: AppLinkTheme.INVERTED
  }
}

export const InvertedDark: Story = {
  args: {
    children: 'Test',
    theme: AppLinkTheme.INVERTED
  }
}

InvertedDark.decorators = [ThemeDecorator(Theme.DARK)]
