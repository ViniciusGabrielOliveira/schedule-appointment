import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import appointmentReducer from '../features/appointment/appointmentSlice';
import counterReducer from '../features/counter/counterSlice';
import dashboardReducer from '../features/dashboard/dashboardSlice';
import doctorReducer from '../features/doctor/doctorSlice';
import taskReducer from '../features/task/taskSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dashboard: dashboardReducer,
    doctor: doctorReducer,
    appointment: appointmentReducer,
    task: taskReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
