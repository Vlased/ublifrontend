import type { Meta, StoryFn, StoryObj } from '@storybook/react'
import { ReduxDecorator } from '@/shared/config/storybook/decorators/ReduxDecorator'
import { AvatarDropdown } from './AvatarDropdown'

const meta = {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  decorators: [(Story: StoryFn) => <div style={{ width: '120px' }}><Story /></div>]
} as Meta<typeof AvatarDropdown>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}

Primary.decorators = [ReduxDecorator({
  user: {
    authData: {
      avatar: 'https://www.w3schools.com/w3css/img_avatar3.png'
    }
  }
})]
