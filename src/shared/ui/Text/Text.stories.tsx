import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextSize, TextTheme } from './Text'

const meta = {
  title: 'shared/Text',
  component: Text,
  parameters: {
    layout: 'fullscreen'
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

export const TextS: Story = {
  args: {
    children: 'Text',
    title: 'Title',
    size: TextSize.S
  }
}

export const TextM: Story = {
  args: {
    children: 'Text',
    title: 'Title',
    size: TextSize.M
  }
}

export const TextL: Story = {
  args: {
    children: 'Text',
    title: 'Title',
    size: TextSize.L
  }
}
