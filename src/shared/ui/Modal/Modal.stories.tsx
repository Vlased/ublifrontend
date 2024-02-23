import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen'
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
