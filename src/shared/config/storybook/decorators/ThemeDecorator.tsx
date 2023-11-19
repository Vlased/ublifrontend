import { StoryFn } from '@storybook/react'
import { Theme } from '../../../../app/providers/ThemeProvider'

// eslint-disable-next-line
export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
  <div
    style={{ width: '100vw' }}
    className={`app ${theme}`}
  >
    <Story />
  </div>
)
