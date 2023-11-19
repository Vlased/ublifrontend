import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { LoginSchema } from 'features/AuthByUsername'
import { UserSchema } from '../../../../entities/User'
import { AxiosInstance } from 'axios'
import { NavigateFunction } from 'react-router-dom'
import { ProfileSchema } from 'pages/ProfilePage/model/types/profile'

export interface StateSchema {
  user: UserSchema
  loginForm?: LoginSchema
  profile?: ProfileSchema
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
  navigate?: NavigateFunction
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArgs
  state: StateSchema
}
