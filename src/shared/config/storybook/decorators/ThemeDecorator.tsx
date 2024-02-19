import { Theme } from '@/shared/constants/theme'
import { StoryFn } from '@storybook/react'

// eslint-disable-next-line
export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
  <div
    style={{ width: '100vw' }}
    className={`app ${theme}`}
  >
    <Story />
  </div>
)
