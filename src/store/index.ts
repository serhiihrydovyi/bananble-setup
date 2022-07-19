import { combineReducers, configureStore } from '@reduxjs/toolkit'

import authReducer from 'store/reducers/AuthSlice'

const rootReducer = combineReducers({
  authReducer,
})

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  })

export const store = setupStore()

export type RootState = ReturnType<typeof rootReducer>

export type AppStore = ReturnType<typeof setupStore>

export type AppDispatch = AppStore['dispatch']
