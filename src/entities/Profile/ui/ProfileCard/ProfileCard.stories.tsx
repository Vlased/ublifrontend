import type { Meta, StoryObj } from '@storybook/react'
import { Country } from '../../../Country'
import { Currency } from '../../../Currency'
import { ProfileCard } from './ProfileCard'

const meta = {
  title: 'entities/Profile/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof ProfileCard>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    formData: {
      firstName: 'firstName',
      lastName: 'lastName',
      age: 12,
      currency: Currency.UAH,
      country: Country.Ukraine,
      city: 'city',
      username: 'username',
      avatar: 'https://www.w3schools.com/w3css/img_avatar3.png'
    }
  }
}

export const WithError: Story = {
  args: {
    error: 'text error'
  }
}

export const WithLoading: Story = {
  args: {
    isLoading: true
  }
}
