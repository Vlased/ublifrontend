import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { AddCommentFormSchema } from 'features/AddCommentForm'
import { LoginSchema } from 'features/AuthByUsername'
import { EditableProfileCardSchema } from 'features/EditableProfileCard'
import { ScrollRestorationSchema } from 'features/ScrollRestoration'
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage'
import { ArticlesPageSchema } from 'pages/ArticlesPage'
import { rtkApi } from 'shared/api/rtkApi'
import { ArticleDetailsSchema } from '../../../../entities/Article'
import { UserSchema } from '../../../../entities/User'

export interface StateSchema {
  user: UserSchema
  scrollRestoration: ScrollRestorationSchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  // Async reducers
  loginForm?: LoginSchema
  profile?: EditableProfileCardSchema
  articleDetails?: ArticleDetailsSchema
  articleDetailsPage?: ArticleDetailsPageSchema
  addCommentForm?: AddCommentFormSchema
  articlesPage?: ArticlesPageSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArgs {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArgs
  state: StateSchema
}
