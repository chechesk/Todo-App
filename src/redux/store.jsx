import { configureStore } from '@reduxjs/toolkit'
import authReducer from './Slice/Auth'
import todoReducer from './Slice/todo'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    todo: todoReducer,
  },
})