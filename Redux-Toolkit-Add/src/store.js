import { configureStore } from '@reduxjs/toolkit'
import carsReducer from './features/cars/carsSlice'

export default configureStore({
  reducer: {
    cars: carsReducer,
  },
})
