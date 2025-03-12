import { configureStore } from '@reduxjs/toolkit'
import movieReducer from '../data/movieSlice'
import songReducer from '../data/songSlice'

export const store = configureStore({
  reducer: {
    movie : movieReducer,
    song : songReducer
  },
})