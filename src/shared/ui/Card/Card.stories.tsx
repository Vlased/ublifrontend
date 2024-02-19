import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/shared/constants/theme'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { Card } from './Card'

const meta = {
  title: 'shared/Card',
  component: Card,
  parameters: {
    layout: 'centered'
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

export const PrimaryDark: Story = {
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

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
