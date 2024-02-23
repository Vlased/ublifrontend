import type { Meta, StoryObj } from '@storybook/react'

import AdminPanelPage from './AdminPanelPage'

const meta = {
  title: 'pages/AdminPanelPage',
  component: AdminPanelPage,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof AdminPanelPage>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}
