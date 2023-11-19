import { Reducer } from '@reduxjs/toolkit'
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider'
import React, { useEffect } from 'react'
import { useStore } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
}

interface DynamicModuleLoaderProps {
  children: React.ReactNode
  reducers: ReducersList
  removeAfterUnmount?: boolean
}

const DynamicModuleLoader: React.FC<DynamicModuleLoaderProps> = ({
  children,
  reducers,
  removeAfterUnmount
}) => {
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useAppDispatch()

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer)
      dispatch({ type: `@INIT ${name} reducer` })
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKey)
          dispatch({ type: `@DESTROY ${name} reducer` })
        })
      }
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {children}
    </>
  )
}

export default DynamicModuleLoader
