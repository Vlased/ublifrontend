import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { scrollRestorationReducer } from 'features/ScrollRestoration'
import { $api } from 'shared/api/api'
import { rtkApi } from 'shared/api/rtkApi'
import { userReducer } from '../../../../entities/User'
import { createReducerManager } from './reducerManager'
import { StateSchema } from './StateSchema'

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,

    user: userReducer,
    scrollRestoration: scrollRestorationReducer,
    [rtkApi.reducerPath]: rtkApi.reducer
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: IS_DEV,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api
        }
      }
    }).concat(rtkApi.middleware)
  })
  // @ts-expect-error some description idk
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
