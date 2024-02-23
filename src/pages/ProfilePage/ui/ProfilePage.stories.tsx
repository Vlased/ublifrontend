import type { Meta, StoryObj } from '@storybook/react'
import { ReduxDecorator } from '@/shared/config/storybook/decorators/ReduxDecorator'
import { ProfilePageAsync as ProfilePage } from './ProfilePage.async'
import { Currency } from '@/shared/constants/currency'
import { Country } from '@/shared/constants/country'

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof ProfilePage>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {}
}

Light.decorators = [ReduxDecorator({
  profile: {
    form: {
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
})]
