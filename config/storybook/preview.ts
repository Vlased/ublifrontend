import type { Preview } from '@storybook/react'
import { ReduxDecorator } from '@/shared/config/storybook/decorators/ReduxDecorator'
import { RouterDecorator } from '@/shared/config/storybook/decorators/RouterDecorator'
import { StyleDecorator } from '@/shared/config/storybook/decorators/StyleDecorator'
import { SuspenseDecorator } from '@/shared/config/storybook/decorators/SuspenseDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import i18n from './i18n'
import { Theme } from '@/shared/constants/theme'

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
    RouterDecorator,
    SuspenseDecorator
  ]
}

export default preview
