import { ReducersMapObject } from '@reduxjs/toolkit'
import { StoryFn } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from '../../../../entities/Article'
import { loginReducer } from 'features/AuthByUsername'
import { profileReducer } from 'pages/ProfilePage'
import { addCommentFormReducer } from 'features/AddCommentForm'
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsComments: articleDetailsCommentsReducer
}

export const ReduxDecorator = (
  state?: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) => (Story: StoryFn) => (
  <StoreProvider
    initialState={state}
    asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
  >
    <Story />
  </StoreProvider>
)
