import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/shared/constants/theme'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { Modal } from './Modal'

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    disablePortal: true,
    isOpen: true,
    children: `asdjhjkashdlhasjkhdkjhaslkhd
    aisjhdlasldjasdlkjaslkdjlasjkldjlkasjd
    akjsdlkjaskldjklasbdbajsbcjhasljigvdjhkfbsljka
    dhiuhasbkdnlakshdkjasbkjdnlkasjhkjdbasjkndl
    kashkjdhlkaskldhasklldkhd`
  }
}

export const PrimaryDark: Story = {
  args: {
    disablePortal: true,
    isOpen: true,
    children: `asdjhjkashdlhasjkhdkjhaslkhd
    aisjhdlasldjasdlkjaslkdjlasjkldjlkasjd
    akjsdlkjaskldjklasbdbajsbcjhasljigvdjhkfbsljka
    dhiuhasbkdnlakshdkjasbkjdnlkasjhkjdbasjkndl
    kashkjdhlkaskldhasklldkhd`
  }
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
