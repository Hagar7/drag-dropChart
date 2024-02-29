import { configureStore } from '@reduxjs/toolkit'
import corta from './store.slice'

export const store = configureStore({
  reducer: {
   corta
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch