import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { Text, TextSize, TextTheme } from './Text'

const meta = {
  title: 'shared/Text',
  component: Text,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    title: 'Title',
    children: 'Text'
  }
}

export const Error: Story = {
  args: {
    title: 'Title',
    children: 'Text',
    theme: TextTheme.ERROR
  }
}

export const OnlyTitle: Story = {
  args: {
    title: 'Title'
  }
}

export const OnlyText: Story = {
  args: {
    children: 'Text'
  }
}

export const PrimaryDark: Story = {
  args: {
    title: 'Title',
    children: 'Text'
  }
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const TextS: Story = {
  args: {
    children: 'Text',
    title: 'Title',
    size: TextSize.S
  }
}

export const TextSDark: Story = {
  args: {
    children: 'Text',
    title: 'Title',
    size: TextSize.S
  }
}

TextSDark.decorators = [ThemeDecorator(Theme.DARK)]

export const TextM: Story = {
  args: {
    children: 'Text',
    title: 'Title',
    size: TextSize.M
  }
}

export const TextMDark: Story = {
  args: {
    children: 'Text',
    title: 'Title',
    size: TextSize.M
  }
}

TextMDark.decorators = [ThemeDecorator(Theme.DARK)]

export const TextL: Story = {
  args: {
    children: 'Text',
    title: 'Title',
    size: TextSize.L
  }
}

export const TextLDark: Story = {
  args: {
    children: 'Text',
    title: 'Title',
    size: TextSize.L
  }
}

TextLDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitleDark: Story = {
  args: {
    title: 'Title'
  }
}

OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTextDark: Story = {
  args: {
    children: 'Text'
  }
}

OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]
