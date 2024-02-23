import type { Meta, StoryObj } from '@storybook/react'
import { Tabs } from './Tabs'

const tabs = [
  {
    value: 'tab1',
    content: 'tab1'
  },
  {
    value: 'tab2',
    content: 'tab2'
  },
  {
    value: 'tab3',
    content: 'tab3'
  }
]

const meta = {
  title: 'shared/Tabs',
  component: Tabs,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    tabs,
    value: 'tab2',
    handleTabClick: () => null
  }
}
