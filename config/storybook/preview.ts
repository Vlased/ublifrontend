import { ReduxDecorator } from '@/shared/config/storybook/decorators/ReduxDecorator'
import { RouterDecorator } from '@/shared/config/storybook/decorators/RouterDecorator'
import { StyleDecorator } from '@/shared/config/storybook/decorators/StyleDecorator'
import { SuspenseDecorator } from '@/shared/config/storybook/decorators/SuspenseDecorator'
import { Theme } from '@/shared/constants/theme'
import type { Preview } from '@storybook/react'
import i18n from './i18n'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    layout: 'fullscreen',
    themes: {
      default: 'dark',
      list: [
        { name: 'light', class: Theme.LIGHT, color: '#f5faf6' },
        { name: 'dark', class: Theme.DARK, color: '#2233c9' },
        { name: 'orange', class: Theme.ORANGE, color: '#e37724' }
      ]
    },
    i18n
  },
  globals: {
    locale: 'en',
    locales: {
      en: 'English',
      ua: 'Українська'
    }
  },
  decorators: [
    StyleDecorator,
    // ThemeDecorator(Theme.LIGHT),
    ReduxDecorator(),
    RouterDecorator,
    SuspenseDecorator
  ]
}

export default preview
