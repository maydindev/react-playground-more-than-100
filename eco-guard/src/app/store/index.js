import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from '../slices/notificationSlice';
import sensorReducer from '../slices/sensorSlice';
import authReducer from '../slices/authSlice';

export const store = configureStore({
  reducer: {
    notification: notificationReducer,
    sensor: sensorReducer,
    auth: authReducer,
  },
});