import { ReducersMapObject } from '@reduxjs/toolkit'
import React from 'react'
import { Provider } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { StateSchema } from '../config/StateSchema'
import { createReduxStore } from '../config/store'

interface StoreProviderProps {
  children?: React.ReactNode
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

const StoreProvider: React.FC<StoreProviderProps> = ({ children, initialState, asyncReducers }) => {
  const navigate = useNavigate()

  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
    navigate
  )

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default StoreProvider
