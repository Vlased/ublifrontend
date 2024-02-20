import type { Meta, StoryObj } from '@storybook/react'
import CountrySelect from './CountrySelect'

const meta = {
  title: 'entities/Country/CountrySelect',
  component: CountrySelect,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof CountrySelect>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}
