import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/shared/constants/theme'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { Code } from './Code'

const meta = {
  title: 'shared/Code',
  component: Code,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof Code>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: "var http = require('http');\nhttp.createServer(function (req, res) {\n  res.writeHead(200, {'Content-Type': 'text/plain'});\n  res.end('Hello World!');\n}).listen(8080);"
  }
}

export const PrimaryDark: Story = {
  args: {
    children: "var http = require('http');\nhttp.createServer(function (req, res) {\n  res.writeHead(200, {'Content-Type': 'text/plain'});\n  res.end('Hello World!');\n}).listen(8080);"
  }
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
