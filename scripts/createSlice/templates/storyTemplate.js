module.exports = (layer, componentName) => `import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/shared/constants/theme'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { ${componentName} } from './${componentName}'

const meta = {
    title: '${layer}/${componentName}',
    component: ${componentName},
    parameters: {
      layout: 'fullscreen'
    },
    tags: ['autodocs'],
    argTypes: {
      backgroundColor: { control: 'color' }
    },
} as Meta<typeof ${componentName}>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}

export const PrimaryDark: Story = {
  args: {}
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]`;
