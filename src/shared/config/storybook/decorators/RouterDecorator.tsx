import { StoryFn } from '@storybook/react'
// eslint-disable-next-line
import '@/app/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'

export const RouterDecorator = (Story: StoryFn) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
)
