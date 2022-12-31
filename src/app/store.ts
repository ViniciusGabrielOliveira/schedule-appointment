import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import appointmentReducer from '../features/appointment/appointmentSlice';
import dashboardReducer from '../features/dashboard/dashboardSlice';
import doctorReducer from '../features/doctor/doctorSlice';
import medicineReducer from '../features/medicine/medicineSlice';
import patientReducer from '../features/patient/patientSlice';
import taskReducer from '../features/task/taskSlice';

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    doctor: doctorReducer,
    appointment: appointmentReducer,
    task: taskReducer,
    patient: patientReducer,
    medicine: medicineReducer
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
