import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { Button, ButtonSize, ButtonTheme } from './Button'

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Test'
  }
}

export const PrimaryDark: Story = {
  args: {
    children: 'Test'
  }
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Clear: Story = {
  args: {
    children: 'Test',
    theme: ButtonTheme.CLEAR
  }
}

export const ClearDark: Story = {
  args: {
    children: 'Test',
    theme: ButtonTheme.CLEAR
  }
}

ClearDark.decorators = [ThemeDecorator(Theme.DARK)]

export const ClearInverted: Story = {
  args: {
    children: 'Test',
    theme: ButtonTheme.CLEAR_INVERTED
  }
}

export const Outlined: Story = {
  args: {
    children: 'Test',
    theme: ButtonTheme.OUTLINED
  }
}

export const OutlinedDark: Story = {
  args: {
    children: 'Test',
    theme: ButtonTheme.OUTLINED
  }
}

OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Background: Story = {
  args: {
    children: 'Test',
    theme: ButtonTheme.BACKGROUND
  }
}

export const BackgroundInverted: Story = {
  args: {
    children: 'Test',
    theme: ButtonTheme.BACKGROUND_INVERTED
  }
}

export const SquareM: Story = {
  args: {
    children: '<',
    theme: ButtonTheme.OUTLINED,
    square: true
  }
}

export const SquareL: Story = {
  args: {
    children: '<',
    theme: ButtonTheme.OUTLINED,
    square: true,
    size: ButtonSize.L
  }
}

export const SquareXL: Story = {
  args: {
    children: '<',
    theme: ButtonTheme.OUTLINED,
    square: true,
    size: ButtonSize.XL
  }
}

export const Disabled: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    disabled: true
  }
}
