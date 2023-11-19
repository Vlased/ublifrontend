import type { Preview } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { RouterDecorator } from 'shared/config/storybook/decorators/RouterDecorator'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { StyleDecorator } from 'shared/config/storybook/decorators/StyleDecorator'
import { ReduxDecorator } from 'shared/config/storybook/decorators/ReduxDecorator'
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
    ThemeDecorator(Theme.LIGHT),
    ReduxDecorator(),
    RouterDecorator
  ]
}

export default preview
