import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import { articleDetailsReducer } from '@/entities/Article/testing'
import { addCommentFormReducer } from '@/features/AddCommentForm/testing'
import { loginReducer } from '@/features/AuthByUsername/testing'
import { profileReducer } from '@/features/EditableProfileCard/testing'
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing'
import { articlesPageReducer } from '@/pages/ArticlesPage/testing'
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ReducersMapObject } from '@reduxjs/toolkit'
import { StoryFn } from '@storybook/react'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer,
  articlesPage: articlesPageReducer
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
