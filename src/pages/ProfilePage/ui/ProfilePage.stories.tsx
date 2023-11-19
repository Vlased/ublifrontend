import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { Country } from '../../../entities/Country'
import { Currency } from '../../../entities/Currency'
import { ReduxDecorator } from 'shared/config/storybook/decorators/ReduxDecorator'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { ProfilePageAsync as ProfilePage } from './ProfilePage.async'

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  parameters: {
    layout: 'centered'
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

export const Dark: Story = {
  args: {}
}

Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  ReduxDecorator({
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
  })
]
