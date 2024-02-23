import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

const meta = {
  title: 'shared/Card',
  component: Card,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: (
      <>
        <div>some guffy text goin her</div>
        <div>some guffy text goin her</div>
        <div>some guffy text goin her</div>
        <div>some guffy text goin her</div>
      </>
    )
  }
}
